"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
      className="h-full"
    >
      <Card className={cn(
        "h-full border-slate-100 py-6",
        "transition-all duration-300 hover:shadow-lg"
      )}>
        <CardContent className="flex flex-col h-full">
          {/* Quote Icon */}
          <Quote className="size-10 text-primary/20 mb-4" />

          {/* Rating Stars */}
          <div className="flex gap-1 mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "size-5",
                  i < rating ? "text-accent fill-accent" : "text-slate-200"
                )}
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-muted-foreground flex-grow mb-6 leading-relaxed italic">
            &ldquo;{content}&rdquo;
          </p>
        </CardContent>

        {/* Author */}
        <CardFooter className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              {image ? (
                <AvatarImage src={image} alt={name} />
              ) : null}
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-semibold text-lg">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-slate-800">{name}</p>
              {service && (
                <Badge variant="secondary" className="mt-1 font-normal text-xs">
                  {service}
                </Badge>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
