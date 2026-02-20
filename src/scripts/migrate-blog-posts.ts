/**
 * Migrates all blog posts from cryospaclinics.com.au into Payload CMS.
 *
 * Recommended: run once via seed so the DB has everything (users, services, testimonials,
 * team members, and blog posts from the old site):
 *   pnpm seed
 *
 * Other ways to run blog migration only:
 * 1. Start the app (pnpm dev), then open https://localhost:3000/migrate-blog in the browser.
 * 2. Or POST to /api/migrate-blog (e.g. curl -X POST http://localhost:3000/api/migrate-blog).
 * 3. CLI (pnpm run migrate:blog) may fail with Payload loadEnv in some environments; use (1) or (2) instead.
 */
import * as cheerio from "cheerio";
import { BLOG_POST_SLUGS } from "./blog-slugs";

const OLD_SITE_BASE = "https://cryospaclinics.com.au";
const DELAY_MS = 800; // Be gentle on the origin server

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type MigrationStats = { created: number; updated: number; skipped: number; failed: number };

type LexicalTextNode = { type: "text"; text: string };
type LexicalParagraphNode = { type: "paragraph"; children: LexicalTextNode[] };
type LexicalHeadingNode = {
  type: "heading";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: LexicalTextNode[];
};
type LexicalBlockNode = LexicalParagraphNode | LexicalHeadingNode;

function textNode(text: string): LexicalTextNode {
  return { type: "text", text: text.trim() || " " };
}

function paragraphNode(text: string): LexicalParagraphNode {
  return { type: "paragraph", children: [textNode(text)] };
}

function headingNode(tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", text: string): LexicalHeadingNode {
  return { type: "heading", tag, children: [textNode(text)] };
}

/** Patterns for content that is NOT part of the article body (author, nav, share, etc.) */
const SKIP_PATTERNS = [
  /^\s*next\s+post\s*$/i,
  /^\s*previous\s+post\s*$/i,
  /^\s*share\s+tweet\s*$/i,
  /^\s*share\s+pin\s*$/i,
  /^\s*share\s*tweet\s*share\s*pin\s*$/i,
  /^\s*no\s+comments\s*$/i,
  /^\s*leave\s+a\s+comment\s*$/i,
  /^\s*post\s*navigation\s*$/i,
  /^\s*read\s+more\s*$/i,
  /^\s*\[.*\]\s*$/, // [No Comments], [LATEST NEWS], etc.
];

/** Heuristic: looks like author/byline (e.g. "Patricia Noons" - two title-case words, short) */
function looksLikeAuthorLine(text: string): boolean {
  const t = text.trim();
  if (t.length > 50) return false;
  const words = t.split(/\s+/).filter(Boolean);
  if (words.length > 3) return false;
  // Two or three title-case words often = author name
  const allTitleCase = words.every((w) => w.length > 0 && w[0] === w[0].toUpperCase());
  return words.length >= 1 && words.length <= 3 && allTitleCase;
}

function shouldSkipNode(text: string): boolean {
  const t = text.trim();
  if (!t) return true;
  if (SKIP_PATTERNS.some((re) => re.test(t))) return true;
  if (looksLikeAuthorLine(t)) return true;
  return false;
}

/** Convert HTML string to Lexical root children (paragraphs + headings), article body only. */
function htmlToLexicalChildren(html: string): LexicalBlockNode[] {
  const $ = cheerio.load(html);
  const children: LexicalBlockNode[] = [];

  // Remove common non-article elements so they don't get parsed as content
  $(".entry-footer, .post-navigation, .nav-links, .author-bio, .sharedaddy, .social-share, .wp-block-post-author").remove();

  $("p, h1, h2, h3, h4, h5, h6").each((_, el) => {
    const tag = (el.tagName || "").toLowerCase();
    const text = $(el).text().trim();
    if (!text || shouldSkipNode(text)) return;

    if (tag === "h1") children.push(headingNode("h1", text));
    else if (tag === "h2") children.push(headingNode("h2", text));
    else if (tag === "h3") children.push(headingNode("h3", text));
    else if (tag === "h4") children.push(headingNode("h4", text));
    else if (tag === "h5") children.push(headingNode("h5", text));
    else if (tag === "h6") children.push(headingNode("h6", text));
    else children.push(paragraphNode(text));
  });

  if (children.length === 0) {
    const plain = $.text().trim().slice(0, 5000);
    if (plain) {
      plain.split(/\n\n+/).forEach((p) => {
        const t = p.trim();
        if (t && !shouldSkipNode(t)) children.push(paragraphNode(t));
      });
    }
  }

  return children.length ? children : [paragraphNode("(Content migrated from legacy site.)")];
}

function buildLexicalRoot(children: LexicalBlockNode[]) {
  return {
    root: {
      type: "root",
      children,
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  };
}

export type FetchedPost = {
  title: string;
  excerpt: string;
  content: ReturnType<typeof buildLexicalRoot>;
  publishedDate: string;
  authorName?: string;
  imageUrl?: string;
};

function resolveUrl(base: string, href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  const baseUrl = base.replace(/\/?$/, "");
  if (href.startsWith("/")) return `${new URL(baseUrl).origin}${href}`;
  return `${baseUrl}/${href}`;
}

async function fetchPost(slug: string): Promise<FetchedPost | null> {
  const url = `${OLD_SITE_BASE}/${slug}/`;
  let res: Response;
  try {
    res = await fetch(url, {
      headers: { "User-Agent": "Cryospa-Migration/1.0" },
      signal: AbortSignal.timeout(15000),
    });
  } catch (err) {
    console.warn(`  ⚠ Fetch failed for ${slug}:`, err);
    return null;
  }

  if (!res.ok) {
    console.warn(`  ⚠ ${url} returned ${res.status}`);
    return null;
  }

  const html = await res.text();
  const $ = cheerio.load(html);

  const title =
    $("meta[property='og:title']").attr("content")?.trim() ||
    $("h1.entry-title").first().text().trim() ||
    $("h1").first().text().trim() ||
    $("title").text().split("|")[0].trim() ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  // Featured image: og:image first, then first image in entry-content
  let imageUrl: string | undefined =
    $("meta[property='og:image']").attr("content")?.trim() || undefined;
  if (!imageUrl) {
    let imgContentEl = $(".entry-content").first();
    if (!imgContentEl.length) imgContentEl = $(".post-content").first();
    if (!imgContentEl.length) imgContentEl = $("article .content").first();
    const firstImg = imgContentEl.find("img[src]").first();
    if (firstImg.length) {
      const src = firstImg.attr("src")?.trim();
      if (src) imageUrl = resolveUrl(OLD_SITE_BASE, src);
    }
  }

  // Author: WordPress often uses .author-bio .fn, .byline, or meta
  let authorName: string | undefined =
    $(".author-bio .fn").first().text().trim() ||
    $(".byline .author").first().text().trim() ||
    $('meta[name="author"]').attr("content")?.trim() ||
    $("meta[property='article:author']").attr("content")?.trim() ||
    undefined;
  if (authorName) authorName = authorName.replace(/\s+/g, " ").trim() || undefined;

  // Use only the main article body (WordPress .entry-content); strip nav/footer/author/share
  let contentEl = $(".entry-content").first();
  if (!contentEl.length) contentEl = $(".post-content").first();
  if (!contentEl.length) contentEl = $("article .content").first();

  if (!contentEl.length) {
    console.warn(`  ⚠ No content element found for ${slug}`);
    return null;
  }

  contentEl.find(".entry-footer, .post-navigation, .nav-links, .author-bio, .sharedaddy, .social-share, .wp-block-post-author").remove();
  const contentHtml = contentEl.html() || "";
  const lexicalChildren = htmlToLexicalChildren(contentHtml);
  const content = buildLexicalRoot(lexicalChildren);

  // Skip pages that look like testimonials/reviews (person name as title, or almost no content)
  const paragraphCount = lexicalChildren.filter((n) => n.type === "paragraph").length;
  const looksLikePersonName = /^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Za-z]+)?$/.test(title.trim()) || (title.split(/\s+/).length <= 3 && title === title.replace(/[^a-zA-Z\s-]/g, ""));
  if (looksLikePersonName || paragraphCount < 2) return null;

  // Excerpt: first 160 chars of article body (first paragraphs only), no meta
  const excerptSource = lexicalChildren
    .filter((n): n is LexicalParagraphNode => n.type === "paragraph")
    .map((n) => n.children[0]?.text ?? "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const excerpt = excerptSource.slice(0, 160).trim() || title;

  let publishedDate = "2020-01-01";
  const dateEl = $("time[datetime]").first();
  if (dateEl.length) {
    const dt = dateEl.attr("datetime");
    if (dt) publishedDate = dt.slice(0, 10);
  }
  const metaDate = $("meta[property='article:published_time']").attr("content");
  if (metaDate) publishedDate = metaDate.slice(0, 10);

  return { title, excerpt, content, publishedDate, authorName, imageUrl };
}

/** Download image from URL and create a Payload media document. Returns media id or null. */
async function downloadImageAndCreateMedia(
  payload: PayloadInstance,
  imageUrl: string,
  alt: string,
  slug: string,
): Promise<string | number | null> {
  let res: Response;
  try {
    res = await fetch(imageUrl, {
      headers: { "User-Agent": "Cryospa-Migration/1.0" },
      signal: AbortSignal.timeout(15000),
    });
  } catch (err) {
    throw new Error(`Failed to fetch image URL ${imageUrl}: ${err instanceof Error ? err.message : String(err)}`);
  }
  if (!res.ok) throw new Error(`Failed to fetch image URL ${imageUrl} - status: ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get("content-type") || "image/jpeg";
  const ext = contentType.includes("png") ? "png" : contentType.includes("webp") ? "webp" : "jpg";
  const name = `blog-${slug.slice(0, 40)}.${ext}`;

  try {
    const doc = await payload.create({
      collection: "media",
      data: { alt: alt.slice(0, 500) || slug },
      file: {
        data: buffer,
        mimetype: contentType.split(";")[0].trim() || "image/jpeg",
        name,
        size: buffer.length,
      },
    });
    return doc.id;
  } catch (err) {
    throw new Error(`Failed to create media for image URL ${imageUrl}: ${err instanceof Error ? err.message : String(err)}`);
  }
}

/** Find a team-member id by name (exact or contains match). */
async function findTeamMemberByAuthorName(
  payload: PayloadInstance,
  authorName: string,
): Promise<string | number | null> {
  const normalized = authorName.trim().replace(/\s+/g, " ");
  const { docs } = await payload.find({
    collection: "team-members",
    where: {
      or: [
        { name: { equals: normalized } },
        { name: { contains: normalized } },
      ],
    },
    limit: 1,
  });
  const doc = docs[0];
  return doc ? (typeof doc.id === "string" ? doc.id : doc.id) : null;
}

export type PayloadInstance = Awaited<ReturnType<typeof import("payload").getPayload>>;

/** Optional progress callback: (slug, status) */
export type MigrationProgressCallback = (slug: string, status: "skip" | "ok" | "fail") => void;

/** Run migration using an existing Payload instance. Call from API route or after getPayload(). */
export async function runMigration(
  payload: PayloadInstance,
  progress?: MigrationProgressCallback,
  options?: { updateExisting?: boolean },
): Promise<MigrationStats> {
  let created = 0;
  let updated = 0;
  let skipped = 0;
  let failed = 0;
  const updateExisting = options?.updateExisting ?? false;

  for (let i = 0; i < BLOG_POST_SLUGS.length; i++) {
    const slug = BLOG_POST_SLUGS[i];

    const existing = await payload.find({
      collection: "blog-posts",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    const existingDoc = existing.docs[0];

    if (existingDoc && !updateExisting) {
      skipped++;
      progress?.(slug, "skip");
      await delay(100);
      continue;
    }

    const data = await fetchPost(slug);
    await delay(DELAY_MS);

    if (!data) {
      failed++;
      progress?.(slug, "fail");
      throw new Error(`Failed to fetch or parse blog post data for slug: ${slug}`);
    }

    // Download featured image and create media doc when we have an image URL
    let featuredImageId: string | number | null = null;
    if (data.imageUrl) {
      featuredImageId = await downloadImageAndCreateMedia(
        payload,
        data.imageUrl,
        data.title,
        slug,
      );
      await delay(200);
    }

    // Resolve author name to team-member id when possible
    let authorId: string | number | null = null;
    if (data.authorName) {
      authorId = await findTeamMemberByAuthorName(payload, data.authorName);
    }

    const payloadData = {
      title: data.title,
      slug,
      excerpt: data.excerpt.slice(0, 500),
      content: data.content,
      publishedDate: data.publishedDate,
      status: "published" as const,
      category: "wellness-tips" as const,
      ...(featuredImageId != null && { featuredImage: featuredImageId }),
      ...(authorId != null && { author: authorId }),
    };

    try {
      if (existingDoc) {
        await payload.update({
          collection: "blog-posts",
          id: existingDoc.id,
          data: payloadData,
        });
        updated++;
        progress?.(slug, "ok");
      } else {
        await payload.create({
          collection: "blog-posts",
          data: payloadData,
        });
        created++;
        progress?.(slug, "ok");
      }
    } catch (err) {
      console.error(`\nError saving ${slug}:`, err);
      failed++;
      progress?.(slug, "fail");
      throw new Error(`Failed to migrate blog post: ${slug}. Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return { created, updated, skipped, failed };
}

async function main() {
  const { getPayload } = await import("payload");
  const config = (await import("@payload-config")).default;
  const payload = await getPayload({ config });

  console.log(`\n📥 Migrating ${BLOG_POST_SLUGS.length} blog posts from ${OLD_SITE_BASE}\n`);

  const stats = await runMigration(payload, (slug, status) => {
    process.stdout.write(`${slug} ... ${status}\n`);
  });

  console.log(`\n✅ Done. Created: ${stats.created}, Updated: ${stats.updated}, Skipped: ${stats.skipped}, Failed: ${stats.failed}\n`);
  process.exit(stats.failed > 0 ? 1 : 0);
}

// Run main when executed as script (not when imported for runMigration)
const isMain = process.argv[1]?.includes("migrate-blog-posts");
if (isMain) {
  main().catch((err) => {
    console.error("Migration error:", err);
    process.exit(1);
  });
}
