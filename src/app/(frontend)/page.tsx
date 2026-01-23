"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getServiceIcon } from "@/components/Icons";

// Sample data - in production, this would come from Payload CMS
const services = [
  {
    title: "Whole Body Cryotherapy",
    description:
      "Experience the power of extreme cold therapy. A 3-minute treatment that assists with muscle repair, injury recovery, and skin rejuvenation.",
    href: "/services/cryotherapy",
    icon: "snowflake",
    duration: "3 minutes",
    price: 65,
  },
  {
    title: "Infrared Sauna",
    description:
      "Relax in our premium Clearlight saunas. Enjoy reduced stress, improved sleep, muscle recovery, and a brightened complexion.",
    href: "/services/infrared-sauna",
    icon: "fire",
    duration: "30-45 minutes",
    price: 45,
  },
  {
    title: "Himalayan Salt Room",
    description:
      "Breathe easy in our salt cave therapy room. Effective for respiratory issues, skin conditions, and overall relaxation.",
    href: "/services/salt-room",
    icon: "salt",
    duration: "45 minutes",
    price: 35,
  },
  {
    title: "Red Light Therapy",
    description:
      "Harness the power of red light wavelengths to boost cellular energy, rejuvenate skin, and support muscle recovery.",
    href: "/services/red-light-therapy",
    icon: "light",
    duration: "20 minutes",
    price: 40,
  },
  {
    title: "Normatec Compression",
    description:
      "Advanced compression technology used by elite athletes for faster recovery, improved circulation, and reduced muscle soreness.",
    href: "/services/normatec-compression",
    icon: "compression",
    duration: "30 minutes",
    price: 35,
  },
  {
    title: "Contrast Therapy",
    description:
      "Alternate between hot and cold treatments to stimulate blood flow, reduce inflammation, and accelerate recovery.",
    href: "/services/contrast-therapy",
    icon: "contrast",
    duration: "30 minutes",
    price: 75,
  },
];

const testimonials = [
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
    service: "Cryotherapy",
  },
  {
    name: "Lara Nercessian",
    content:
      "I had a really positive experience at Cryospa Clinics. The customer service, facilities and services were wonderful. I used the infrared sauna and will most certainly be back to try cryotherapy.",
    rating: 5,
    service: "Infrared Sauna",
  },
  {
    name: "Patrick Nguyen",
    content:
      "Amazing place, really clean and super friendly staff! Clearlight sauna too which is top of the line. Would highly recommend to anyone looking for quality wellness treatments.",
    rating: 5,
    service: "Sauna & Cryo",
  },
];

const blogPosts = [
  {
    title: "Infrared Saunas – Unveiling Their Healing Power",
    excerpt:
      "In a bustling city like Sydney, where the fast-paced lifestyle often takes a toll, discover how infrared saunas can help restore balance and wellness.",
    slug: "infrared-saunas-healing-power",
    category: "Wellness Tips",
    date: "January 15, 2026",
  },
  {
    title: "Red Light Therapy: Effectiveness for Skin Care",
    excerpt:
      "Red light therapy is a procedure designed to help heal your skin, ranging from reducing wrinkles to improving overall skin tone and texture.",
    slug: "red-light-therapy-skin-care",
    category: "Treatment Guide",
    date: "January 10, 2026",
  },
  {
    title: "Does Salt Room Therapy Help With Acne?",
    excerpt:
      "Salt therapy (halotherapy) has a vast range of benefits. Learn how this ancient treatment can help with skin conditions including acne.",
    slug: "salt-room-therapy-acne",
    category: "Health Benefits",
    date: "January 5, 2026",
  },
];

const features = [
  {
    title: "Private Treatment Rooms",
    description:
      "Every treatment room is yours alone. Enjoy your experience in complete privacy and comfort.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Expert Wellness Team",
    description:
      "Our trained professionals guide you through each treatment for the best possible results.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Premium Equipment",
    description:
      "We use only the highest quality equipment, including Clearlight saunas and medical-grade cryotherapy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Convenient Location",
    description:
      "Located in Crows Nest with easy public transport access and flexible appointment times.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-primary/5 to-accent/5" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Content */}
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Sydney&apos;s Award-Winning Wellness Centre
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Revitalise · Re-energise ·{" "}
              <span className="text-gradient">Rejuvenate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              Experience the ultimate in wellness treatments. From whole-body
              cryotherapy to infrared saunas, discover how Cryospa can transform
              your health and wellbeing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Book Your Experience
              </Link>
              <Link href="/services" className="btn btn-secondary text-lg px-8 py-4">
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: "10+", label: "Treatments" },
                { value: "5000+", label: "Happy Clients" },
                { value: "5★", label: "Google Rating" },
                { value: "8+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Sydney's Premier Health & Wellness Centre"
              subtitle="Situated in Sydney's lower North Shore, Cryospa Clinics is a specialised wellness centre designed to revitalise, re-energise and rejuvenate you."
            />
            <p className="text-slate-600 leading-relaxed mb-8">
              As an award-winning business, Cryospa is dedicated to providing the
              best service to each and every customer. Located in Crows Nest, we
              offer a combination of Cryotherapy, Infrared Sauna, Salt Room
              Therapy, Normatec Compression, Red Light Therapy, and Lymphatic
              Massage. With multiple appointment times available, including
              weekends, you can find a time that suits – no matter how busy your
              day is.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="Discover our range of premium wellness treatments designed to help you feel your best."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                icon={getServiceIcon(service.icon)}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Cryospa?"
            subtitle="Experience the difference at Sydney's most complete wellness destination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-dark overflow-hidden">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real experiences from our valued customers"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              Read more reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <NewsletterForm />
        </div>
      </section>

      {/* Blog Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="The Latest from Our Blog"
            subtitle="News, tips, and wellness insights"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-secondary">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="font-serif text-white mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Transform Your Wellness?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Book your first session today and experience the Cryospa
                difference. Our team is ready to help you on your wellness journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-lg px-8 py-4"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary text-lg px-8 py-4"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
