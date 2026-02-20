import { getPayload } from "payload";
import config from "@payload-config";
import { BlogPageClient } from "./BlogPageClient";

const CATEGORY_LABELS: Record<string, string> = {
  "wellness-tips": "Wellness Tips",
  "treatment-guide": "Treatment Guide",
  "health-benefits": "Health Benefits",
  news: "News",
};

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const { docs: posts } = await payload.find({
    collection: "blog-posts",
    where: { status: { equals: "published" } },
    sort: "-publishedDate",
    limit: 100,
    depth: 1,
  });

  const blogPosts = posts.map((post) => {
    const featuredImage = post.featuredImage;
    const imageUrl =
      typeof featuredImage === "object" && featuredImage?.url
        ? featuredImage.url
        : typeof featuredImage === "object" && featuredImage?.filename
          ? `/media/${featuredImage.filename}`
          : undefined;
    return {
      title: post.title,
      excerpt: post.excerpt ?? "",
      slug: post.slug,
      category: post.category ? CATEGORY_LABELS[post.category] ?? post.category : undefined,
      date: post.publishedDate
        ? new Date(post.publishedDate).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : undefined,
      image: imageUrl,
    };
  });

  const categories = ["All", ...Object.values(CATEGORY_LABELS)];

  return (
    <BlogPageClient
      initialPosts={blogPosts}
      categories={categories}
    />
  );
}
