"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

const values = [
  {
    title: "Excellence",
    description:
      "We use only the highest quality equipment and products to ensure every treatment delivers exceptional results.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Privacy",
    description:
      "Every treatment room is private, giving you the space and comfort to fully enjoy your wellness experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Expertise",
    description:
      "Our trained wellness professionals guide you through each treatment, ensuring safety and optimal results.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We're proud to be part of the Crows Nest community, serving locals and visitors with care and dedication.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2017",
    title: "The Beginning",
    description: "Cryospa Clinics opened its doors in Crows Nest, becoming Sydney's first dedicated cryotherapy and wellness centre.",
  },
  {
    year: "2018",
    title: "Expanding Services",
    description: "Added infrared saunas and Himalayan salt room to offer a complete wellness experience.",
  },
  {
    year: "2020",
    title: "Award Recognition",
    description: "Recognized as one of Sydney's top wellness destinations, receiving multiple industry awards.",
  },
  {
    year: "2023",
    title: "Growing Strong",
    description: "Expanded our treatment offerings and team to serve more clients than ever before.",
  },
];

export default function AboutPage() {
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
              Our Story
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Cryospa Clinics
            </h1>
            <p className="text-xl text-slate-600">
              Sydney&apos;s most complete destination to reboot, revitalise, and
              re-energise your mind, body, and soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-serif text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Mission
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Situated in Sydney&apos;s lower North Shore, Cryospa Clinics is a
                  specialised Health & Wellness Centre designed to revitalise,
                  re-energise and rejuvenate you through a combination of
                  cutting-edge treatments and ancient healing therapies.
                </p>
                <p>
                  As an award-winning business, Cryospa is dedicated to providing
                  the best service to each and every customer looking for
                  cryotherapy, infrared sauna, salt room treatments, and more.
                </p>
                <p>
                  We believe that wellness should be accessible, effective, and
                  enjoyable. That&apos;s why we&apos;ve created a space where you can
                  escape the stresses of daily life and focus on your health and
                  wellbeing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-slate-600 font-medium">Dedicated to Your Wellness</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at Cryospa Clinics"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Journey"
            subtitle="From a vision to Sydney's premier wellness destination"
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-grow bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
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
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Visit us at our Crows Nest location or book online to experience
              the Cryospa difference.
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
      </section>
    </>
  );
}
