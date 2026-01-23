"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  content: string;
  rating?: number;
  image?: string;
  service?: string;
  index?: number;
}

export function TestimonialCard({
  name,
  content,
  rating = 5,
  image,
  service,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 h-full flex flex-col"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-10 h-10 text-primary/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-accent" : "text-slate-200"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-slate-600 flex-grow mb-6 leading-relaxed italic">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0">
          {image ? (
            <Image src={image} alt={name} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-primary font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-slate-800">{name}</p>
          {service && (
            <p className="text-sm text-primary">{service}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
