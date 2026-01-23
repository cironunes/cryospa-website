"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import { BlogCard } from "@/components/BlogCard";

// Sample blog data - in production, this would come from Payload CMS
const blogData: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string[];
    category: string;
    date: string;
    readTime: string;
    author: string;
    relatedPosts: { title: string; slug: string; category: string; date: string }[];
  }
> = {
  "infrared-saunas-healing-power": {
    title: "Infrared Saunas – Unveiling Their Healing Power",
    excerpt:
      "In a bustling city like Sydney, where the fast-paced lifestyle often takes a toll on our bodies and minds, finding effective ways to unwind and rejuvenate is crucial.",
    content: [
      "In a bustling city like Sydney, where the fast-paced lifestyle often takes a toll on our bodies and minds, finding effective ways to unwind and rejuvenate is crucial. One such method that has gained significant popularity in recent years is the use of infrared saunas. These modern marvels offer a plethora of health benefits, making them a must-try for anyone seeking to enhance their wellness routine.",
      "## What Are Infrared Saunas?",
      "Infrared saunas are a type of sauna that uses infrared heaters to emit infrared light, which is experienced as radiant heat. Unlike traditional saunas that heat the air around you, infrared saunas directly warm your body. This allows for a more comfortable experience at lower temperatures while still providing deep tissue penetration.",
      "At Cryospa Clinics, we use Clearlight infrared saunas, which are considered the gold standard in the industry. These medical-grade saunas emit full-spectrum infrared light, ensuring you receive the maximum therapeutic benefits from each session.",
      "## Key Benefits of Infrared Saunas",
      "### Detoxification",
      "One of the primary benefits of infrared saunas is their ability to promote detoxification. The deep-penetrating heat helps to increase your core body temperature, inducing a deep, detoxifying sweat at the cellular level. This process helps to expel toxins, heavy metals, and other impurities from your body.",
      "### Pain Relief and Muscle Recovery",
      "Infrared heat penetrates deep into joints, muscles, and tissues, increasing circulation and speeding up oxygen flow. This makes infrared saunas particularly effective for relieving muscle aches, joint pain, and stiffness. Athletes often use infrared saunas as part of their recovery routine to reduce inflammation and accelerate healing.",
      "### Stress Reduction",
      "The gentle warmth of an infrared sauna creates a relaxing environment that helps to reduce cortisol levels and promote the release of endorphins. Regular sessions can help to improve sleep quality, reduce anxiety, and enhance overall mood.",
      "### Skin Health",
      "Infrared saunas can help to improve skin tone, texture, and clarity by increasing blood flow and stimulating collagen production. The deep sweating also helps to cleanse pores and remove dead skin cells, leaving your skin looking refreshed and rejuvenated.",
      "## What to Expect at Your First Session",
      "If you're new to infrared saunas, here's what you can expect at Cryospa Clinics:",
      "Your session will typically last 30-45 minutes. We recommend starting with shorter sessions and gradually increasing the duration as your body adapts to the heat. Our private sauna rooms ensure you have a relaxing, comfortable experience.",
      "Remember to stay hydrated before, during, and after your session. We provide towels and amenities to ensure your comfort throughout your visit.",
      "## Conclusion",
      "Infrared saunas offer a gentle yet effective way to support your overall health and wellbeing. Whether you're seeking relief from chronic pain, looking to enhance your skin health, or simply need a way to de-stress after a busy week, infrared sauna therapy could be the answer you're looking for.",
      "Ready to experience the healing power of infrared saunas? Book your session at Cryospa Clinics today and discover the difference for yourself.",
    ],
    category: "Wellness Tips",
    date: "January 15, 2026",
    readTime: "6 min read",
    author: "Cryospa Team",
    relatedPosts: [
      {
        title: "Red Light Therapy: Effectiveness for Skin Care",
        slug: "red-light-therapy-skin-care",
        category: "Treatment Guide",
        date: "January 10, 2026",
      },
      {
        title: "The Benefits of Contrast Therapy",
        slug: "benefits-contrast-therapy",
        category: "Health Benefits",
        date: "December 10, 2025",
      },
      {
        title: "Stress Relief: Natural Ways to Unwind in Sydney",
        slug: "stress-relief-sydney",
        category: "Wellness Tips",
        date: "December 5, 2025",
      },
    ],
  },
  "red-light-therapy-skin-care": {
    title: "Red Light Therapy: Effectiveness for Skin Care",
    excerpt:
      "Red light therapy is a procedure designed to help heal your skin, ranging from reducing wrinkles to improving overall skin tone and texture.",
    content: [
      "Red light therapy has emerged as one of the most exciting developments in skin care and anti-aging treatments. This non-invasive therapy uses specific wavelengths of red light to penetrate the skin and stimulate cellular function, offering a range of benefits for skin health and appearance.",
      "## How Does Red Light Therapy Work?",
      "Red light therapy works by emitting wavelengths of light (typically between 630-700 nanometers) that penetrate the skin to a depth of about 8-10 millimeters. When these light particles are absorbed by the skin cells, they stimulate the mitochondria – the powerhouse of the cell – to produce more adenosine triphosphate (ATP).",
      "This increase in cellular energy triggers a cascade of beneficial effects, including increased collagen production, enhanced blood circulation, and accelerated tissue repair.",
      "## Benefits for Your Skin",
      "### Reduced Wrinkles and Fine Lines",
      "One of the most sought-after benefits of red light therapy is its ability to reduce the appearance of wrinkles and fine lines. By stimulating collagen production, red light therapy helps to plump the skin and reduce the depth of wrinkles over time.",
      "### Improved Skin Tone and Texture",
      "Regular red light therapy sessions can help to improve overall skin tone and texture by promoting cellular renewal and increasing blood flow to the skin. This can result in a more even complexion and smoother skin surface.",
      "### Acne Reduction",
      "Red light therapy has shown promising results in reducing acne and preventing future breakouts. The anti-inflammatory properties of red light help to calm redness and irritation, while the increased cellular activity promotes faster healing of existing blemishes.",
      "### Enhanced Wound Healing",
      "The regenerative properties of red light make it effective for accelerating wound healing and reducing scarring. This makes it a popular choice for post-procedure skin recovery.",
      "## What to Expect During Treatment",
      "Red light therapy sessions at Cryospa Clinics are relaxing and comfortable. You'll simply stand or lie in front of our red light therapy panels while the light does its work. Sessions typically last about 20 minutes.",
      "Most people begin to see results after 8-12 sessions, though some benefits may be noticeable earlier. For best results, we recommend regular sessions as part of your ongoing skincare routine.",
      "## Conclusion",
      "Red light therapy offers a safe, non-invasive way to enhance your skin's health and appearance. Whether you're looking to reduce signs of aging, improve your complexion, or address specific skin concerns, red light therapy could be the solution you've been searching for.",
    ],
    category: "Treatment Guide",
    date: "January 10, 2026",
    readTime: "5 min read",
    author: "Cryospa Team",
    relatedPosts: [
      {
        title: "Infrared Saunas – Unveiling Their Healing Power",
        slug: "infrared-saunas-healing-power",
        category: "Wellness Tips",
        date: "January 15, 2026",
      },
      {
        title: "Does Salt Room Therapy Help With Acne?",
        slug: "salt-room-therapy-acne",
        category: "Health Benefits",
        date: "January 5, 2026",
      },
    ],
  },
  "salt-room-therapy-acne": {
    title: "Does Salt Room Therapy Help With Acne?",
    excerpt:
      "Salt therapy (halotherapy) has a vast range of benefits. Learn how this ancient treatment can help with skin conditions including acne.",
    content: [
      "Salt therapy, also known as halotherapy, has been used for centuries to treat various respiratory and skin conditions. But can sitting in a salt room really help with acne? The answer is yes – and here's why.",
      "## Understanding Salt Therapy",
      "Halotherapy involves sitting in a specially designed room where walls are lined with Himalayan salt, and a halogenerator disperses microscopic salt particles into the air. As you breathe and relax, these tiny particles settle on your skin and enter your respiratory system.",
      "## How Salt Therapy Helps Acne",
      "### Natural Antibacterial Properties",
      "Salt has natural antibacterial and antimicrobial properties. When salt particles land on your skin, they help to kill the bacteria that contribute to acne breakouts. This natural disinfectant action can help to reduce both the frequency and severity of acne.",
      "### Anti-Inflammatory Effects",
      "Salt therapy has been shown to have anti-inflammatory effects, which can help to reduce the redness and swelling associated with acne. This makes existing breakouts less noticeable and helps them heal faster.",
      "### Skin Detoxification",
      "The microscopic salt particles help to draw out impurities and toxins from the skin. This deep cleansing effect can help to unclog pores and prevent the formation of new pimples.",
      "### pH Balancing",
      "Salt therapy can help to balance the pH level of your skin, creating an environment that's less hospitable to acne-causing bacteria.",
      "## What to Expect",
      "During a salt room session at Cryospa Clinics, you'll relax in our specially designed Himalayan salt room for approximately 45 minutes. The atmosphere is calm and peaceful, allowing you to unwind while the salt works its magic.",
      "Many people notice improvements in their skin after just a few sessions, though regular visits are recommended for best results. Salt therapy can be used alongside your existing skincare routine and is suitable for all skin types.",
      "## Conclusion",
      "If you're struggling with acne and looking for a natural, non-invasive treatment option, salt room therapy is worth considering. Combined with a good skincare routine and healthy lifestyle habits, halotherapy can be an effective tool in your fight against acne.",
    ],
    category: "Health Benefits",
    date: "January 5, 2026",
    readTime: "4 min read",
    author: "Cryospa Team",
    relatedPosts: [
      {
        title: "Red Light Therapy: Effectiveness for Skin Care",
        slug: "red-light-therapy-skin-care",
        category: "Treatment Guide",
        date: "January 10, 2026",
      },
      {
        title: "Infrared Saunas – Unveiling Their Healing Power",
        slug: "infrared-saunas-healing-power",
        category: "Wellness Tips",
        date: "January 15, 2026",
      },
    ],
  },
};

// Default blog post for slugs that don't have specific content
const defaultPost = {
  title: "Blog Post",
  excerpt: "Discover wellness tips and insights from Cryospa Clinics.",
  content: [
    "Thank you for visiting our blog. This article is coming soon.",
    "In the meantime, explore our other articles or contact us to learn more about our services.",
  ],
  category: "Wellness Tips",
  date: "January 2026",
  readTime: "3 min read",
  author: "Cryospa Team",
  relatedPosts: [],
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogData[slug] || { ...defaultPost, title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-slate-50 via-primary/5 to-accent/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
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

            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            <h1
              className="font-serif text-slate-900 mb-6 text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-slate prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-semibold text-slate-800 mt-10 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-slate-800 mt-8 mb-3"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-slate-600 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Ready to Experience These Benefits?
              </h3>
              <p className="text-slate-600 mb-6">
                Book your session at Cryospa Clinics and start your wellness
                journey today.
              </p>
              <Link
                href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book Now
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-custom">
            <h2
              className="font-serif text-slate-900 text-2xl md:text-3xl mb-10 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {post.relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.slug}
                  {...relatedPost}
                  excerpt=""
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
