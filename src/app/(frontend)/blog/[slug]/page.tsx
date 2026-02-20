import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { Sparkles } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CATEGORY_LABELS: Record<string, string> = {
  "wellness-tips": "Wellness Tips",
  "treatment-guide": "Treatment Guide",
  "health-benefits": "Health Benefits",
  news: "News",
};

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "blog-posts",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    limit: 1,
    depth: 2,
  });

  const post = docs[0];
  if (!post) notFound();

  const categoryLabel = post.category
    ? CATEGORY_LABELS[post.category] ?? post.category
    : "Wellness Tips";
  const dateStr = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";
  const authorName =
    typeof post.author === "object" && post.author && "name" in post.author
      ? (post.author as { name: string }).name
      : "Cryospa Team";

  const contentHtml =
    post.content && typeof post.content === "object" && "root" in post.content
      ? convertLexicalToHTML({
          data: post.content as Parameters<typeof convertLexicalToHTML>[0]["data"],
          disableContainer: true,
        })
      : "";

  const { docs: relatedDocs } = await payload.find({
    collection: "blog-posts",
    where: {
      status: { equals: "published" },
      slug: { not_equals: slug },
    },
    sort: "-publishedDate",
    limit: 3,
    depth: 0,
  });

  const relatedPosts = relatedDocs.map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category ? CATEGORY_LABELS[p.category] ?? p.category : "",
    date: p.publishedDate
      ? new Date(p.publishedDate).toLocaleDateString("en-AU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "",
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-slate-50 via-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary mb-6 hover:gap-3 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {categoryLabel}
              </span>
            </div>

            <h1
              className="font-serif text-slate-900 mb-6 text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              {dateStr && <span>{dateStr}</span>}
              <span>•</span>
              <span>By {authorName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            <div
              className="prose prose-slate prose-lg max-w-none payload-richtext"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* CTA */}
            <Card className="mt-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-0 shadow-none">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="size-7 text-primary" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-serif text-slate-900 mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Ready to Experience These Benefits?
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Book your session at Cryospa Clinics and start your
                    wellness journey today.
                  </p>
                  <Button asChild size="lg">
                    <Link
                      href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-custom">
            <h2
              className="font-serif text-slate-900 text-2xl md:text-3xl mb-10 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.slug}
                  title={relatedPost.title}
                  slug={relatedPost.slug}
                  excerpt=""
                  category={relatedPost.category}
                  date={relatedPost.date}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
