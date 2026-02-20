"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Users, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SectionHeading } from "@/components/SectionHeading";

const allTestimonials = [
  {
    name: "Emily Collinson",
    content:
      "Had an amazing time, the studio is clean and beautiful and the sauna rooms are SO spacious. I went with a friend and we had an amazing time and left feeling amazing. Going to sleep like a dream tonight!",
    rating: 5,
    service: "Infrared Sauna",
  },
  {
    name: "Omelio Vlahos",
    content:
      "This has long been my go to place for recovery. From the great service and the top notch facilities and atmosphere I couldn't imagine going anywhere else. Mitch and his team have done a great job.",
    rating: 5,
    service: "Recovery",
  },
  {
    name: "Lara Nercessian",
    content:
      "I had a really positive experience at Cryospa Clinics. The customer service, facilities and services were wonderful. I used the infrared sauna and will most certainly be back to try the salt room!",
    rating: 5,
    service: "Infrared Sauna",
  },
  {
    name: "Patrick Nguyen",
    content:
      "Amazing place, really clean and super friendly staff! Clearlight sauna too which is top of the line. Would highly recommend to anyone looking for quality wellness treatments.",
    rating: 5,
    service: "Sauna & Recovery",
  },
  {
    name: "Inez Bye",
    content:
      "Had infrared sauna and salt room treatments and enjoyed every minute on a chilly Saturday afternoon. Left the clinic feeling more relaxed in all my sore muscles and have been sleeping like a baby!",
    rating: 5,
    service: "Multiple Treatments",
  },
  {
    name: "Tamara Gabriel",
    content:
      "Absolutely blown away by the level of service and positive energy in this practice. I attended Cryospa for a few treatments. Infrared sauna and the salt room. I was blown away by each experience.",
    rating: 5,
    service: "Full Experience",
  },
  {
    name: "Carole Gridley",
    content:
      "Beautiful experience - loved my first Salt Room session. Professional and pleasant service, spotlessly clean. Will certainly come again. The atmosphere is so calming and peaceful.",
    rating: 5,
    service: "Salt Room",
  },
  {
    name: "Lauren Dunne",
    content:
      "Loved my visit to Cryospa! The combination of infrared sauna and salt room was very invigorating. I'll definitely be back! The staff were incredibly knowledgeable and friendly.",
    rating: 5,
    service: "Multiple Treatments",
  },
  {
    name: "Georgia H",
    content:
      "Outstanding service, very clean and tidy & plenty of amenities. We walk out feeling so relaxed and refreshed. Lovely friendly staff too. Highly recommend to anyone seeking a wellness retreat.",
    rating: 5,
    service: "Wellness Package",
  },
  {
    name: "Maddy King",
    content:
      "I love having a great detox place on the Northside! I love the saunas and the treatments have helped my dad's joint inflammation. Such a professional and welcoming environment.",
    rating: 5,
    service: "Sauna & Recovery",
  },
  {
    name: "Sarah M",
    content:
      "The best recovery session I've ever had. The Normatec compression boots combined with the infrared sauna left me feeling like a new person. Perfect after a long week of training.",
    rating: 5,
    service: "Recovery Package",
  },
  {
    name: "James T",
    content:
      "As a professional athlete, recovery is crucial. Cryospa has become an essential part of my training routine. The staff understand the needs of athletes and the equipment is top-notch.",
    rating: 5,
    service: "Recovery",
  },
];

const stats = [
  { value: "5.0", label: "Google Rating", icon: <Star className="size-5" /> },
  { value: "500+", label: "5-Star Reviews", icon: <MessageSquare className="size-5" /> },
  { value: "98%", label: "Would Recommend", icon: <ThumbsUp className="size-5" /> },
  { value: "5000+", label: "Happy Clients", icon: <Users className="size-5" /> },
];

export default function TestimonialsPage() {
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
              Testimonials
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to
              say about their Cryospa experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="font-serif text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Experience Cryospa?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of satisfied clients and discover the difference
              for yourself.
            </p>
            <Button asChild variant="accent" size="xl">
              <Link
                href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your First Visit
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
