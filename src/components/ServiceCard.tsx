"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  image?: string;
  duration?: string;
  price?: number;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  image,
  duration,
  price,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-slate-100">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-primary">
                  {icon}
                </div>
              </div>
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                {icon}
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
              {description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {duration && (
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {duration}
                </span>
              )}
              {price && (
                <span className="text-sm font-semibold text-primary">
                  From ${price}
                </span>
              )}
              <span className="text-xs font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Learn more
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
        </div>
      </Link>
    </motion.div>
  );
}
