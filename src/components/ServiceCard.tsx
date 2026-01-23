"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      <Link href={href} className="group block h-full">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="size-16 rounded-full bg-white/80 flex items-center justify-center text-primary">
                  {icon}
                </div>
              </div>
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                {icon}
              </div>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </CardContent>

          {/* Footer */}
          <CardFooter className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {duration && (
                <Badge variant="secondary" className="gap-1 font-normal">
                  <Clock className="size-3" />
                  {duration}
                </Badge>
              )}
              {price && (
                <span className="text-sm font-semibold text-primary">
                  From ${price}
                </span>
              )}
            </div>
            <span className="text-xs font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Learn more
              <ArrowRight className="size-3" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
