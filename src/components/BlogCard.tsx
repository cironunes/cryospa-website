"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  category?: string;
  date?: string;
  index?: number;
}

export function BlogCard({
  title,
  excerpt,
  slug,
  image,
  category,
  date,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`} className="group block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-slate-100">
          {/* Image */}
          <div className="relative h-52 overflow-hidden bg-slate-100">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            )}
            {category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-primary rounded-full">
                  {category}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {date && (
              <p className="text-xs text-slate-500 mb-2">{date}</p>
            )}
            <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 mb-4">
              {excerpt}
            </p>
            <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read more
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
