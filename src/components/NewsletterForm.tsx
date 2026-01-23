"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
    
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our mailing list. Check your inbox for a welcome email.",
      variant: "success",
    });
    
    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-0 shadow-none">
        <CardContent className="p-8 md:p-12">
          <div className="max-w-xl mx-auto text-center">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="size-7 text-primary" />
            </div>
            <h3
              className="text-2xl md:text-3xl font-serif text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Be the First to Know
            </h3>
            <p className="text-muted-foreground mb-8">
              Join our mailing list to receive the latest offers, wellness tips, and
              exclusive promotions.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow h-12"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                size="lg"
                className="h-12 px-8 whitespace-nowrap"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Subscribing...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="size-4" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-primary"
              >
                Thank you for subscribing! Check your inbox for a welcome email.
              </motion.p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
