"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      <Link href={`/blog/${slug}`} className="group block h-full">
        <Card className={cn(
          "h-full overflow-hidden border-slate-100 py-0 gap-0",
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        )}>
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
                <Badge className="bg-white/90 backdrop-blur-sm text-primary border-0 shadow-sm">
                  {category}
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className="p-6">
            {date && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                <Calendar className="size-3" />
                {date}
              </div>
            )}
            <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {excerpt}
            </p>
            <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read more
              <ArrowRight className="size-4" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.article>
  );
}
