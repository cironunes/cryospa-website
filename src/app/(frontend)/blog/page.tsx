"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    title: "Infrared Saunas – Unveiling Their Healing Power",
    excerpt:
      "In a bustling city like Sydney, where the fast-paced lifestyle often takes a toll on our bodies and minds, finding effective ways to unwind and rejuvenate is crucial. Infrared saunas have emerged as a popular wellness trend.",
    slug: "infrared-saunas-healing-power",
    category: "Wellness Tips",
    date: "January 15, 2026",
  },
  {
    title: "Red Light Therapy: Effectiveness for Skin Care",
    excerpt:
      "Red light therapy is a procedure designed to help heal your skin, ranging from reducing wrinkles to improving overall skin tone and texture. Discover how this non-invasive treatment can transform your skin.",
    slug: "red-light-therapy-skin-care",
    category: "Treatment Guide",
    date: "January 10, 2026",
  },
  {
    title: "Does Salt Room Therapy Help With Acne?",
    excerpt:
      "Salt therapy (halotherapy) has a vast range of benefits. Learn how this ancient treatment can help with skin conditions including acne, and why it's becoming a go-to solution for many.",
    slug: "salt-room-therapy-acne",
    category: "Health Benefits",
    date: "January 5, 2026",
  },
  {
    title: "The Science Behind Whole Body Cryotherapy",
    excerpt:
      "Explore the scientific principles that make whole body cryotherapy such an effective recovery tool. From reducing inflammation to boosting endorphins, learn what happens to your body during a cryo session.",
    slug: "science-behind-cryotherapy",
    category: "Treatment Guide",
    date: "December 28, 2025",
  },
  {
    title: "5 Recovery Techniques Every Athlete Should Know",
    excerpt:
      "Whether you're a professional athlete or a weekend warrior, proper recovery is essential for performance. Discover the top five recovery techniques that can help you train harder and feel better.",
    slug: "recovery-techniques-athletes",
    category: "Wellness Tips",
    date: "December 20, 2025",
  },
  {
    title: "How Normatec Compression Boots Aid Recovery",
    excerpt:
      "Used by elite athletes worldwide, Normatec compression boots have revolutionized recovery. Learn how this technology works and why it's become a staple in sports performance and wellness.",
    slug: "normatec-compression-recovery",
    category: "Treatment Guide",
    date: "December 15, 2025",
  },
  {
    title: "The Benefits of Contrast Therapy",
    excerpt:
      "Alternating between hot and cold treatments has been used for centuries to promote healing. Discover the modern science behind contrast therapy and how it can benefit your health.",
    slug: "benefits-contrast-therapy",
    category: "Health Benefits",
    date: "December 10, 2025",
  },
  {
    title: "Stress Relief: Natural Ways to Unwind in Sydney",
    excerpt:
      "Living in a busy city can be stressful. Explore natural wellness treatments available in Sydney that can help you de-stress and find your inner calm.",
    slug: "stress-relief-sydney",
    category: "Wellness Tips",
    date: "December 5, 2025",
  },
  {
    title: "Understanding Lymphatic Drainage Massage",
    excerpt:
      "Lymphatic drainage massage is a gentle yet powerful technique that supports your body's natural detoxification process. Learn about its benefits and what to expect from a session.",
    slug: "understanding-lymphatic-drainage",
    category: "Treatment Guide",
    date: "November 28, 2025",
  },
];

const categories = ["All", "Wellness Tips", "Treatment Guide", "Health Benefits"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

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
                  category === activeCategory && "shadow-md"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
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
