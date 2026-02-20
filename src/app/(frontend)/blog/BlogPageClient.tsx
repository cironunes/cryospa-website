"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/BlogCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type BlogPostItem = {
  title: string;
  excerpt: string;
  slug: string;
  category?: string;
  date?: string;
  image?: string;
};

export function BlogPageClient({
  initialPosts,
  categories,
}: {
  initialPosts: BlogPostItem[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? initialPosts
      : initialPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-primary/5 to-accent/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Wellness Insights & Tips
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of articles on wellness, recovery, and
              self-care. Stay informed and inspired on your wellness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full",
                  category === activeCategory && "shadow-md",
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              No blog posts found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Load More - optional for future pagination */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline">Load More Articles</Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
