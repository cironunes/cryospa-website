"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Lock, FlaskConical, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const values = [
  {
    title: "Excellence",
    description:
      "We use only the highest quality equipment and products to ensure every treatment delivers exceptional results.",
    icon: <Award className="size-8" />,
  },
  {
    title: "Privacy",
    description:
      "Every treatment room is private, giving you the space and comfort to fully enjoy your wellness experience.",
    icon: <Lock className="size-8" />,
  },
  {
    title: "Expertise",
    description:
      "Our trained wellness professionals guide you through each treatment, ensuring safety and optimal results.",
    icon: <FlaskConical className="size-8" />,
  },
  {
    title: "Community",
    description:
      "We're proud to be part of the Crows Nest community, serving locals and visitors with care and dedication.",
    icon: <Heart className="size-8" />,
  },
];

const timeline = [
  {
    year: "2017",
    title: "The Beginning",
    description: "Cryospa Clinics opened its doors in Crows Nest, becoming Sydney's first dedicated wellness centre.",
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
            <p className="text-xl text-muted-foreground">
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
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Situated in Sydney&apos;s lower North Shore, Cryospa Clinics is a
                  specialised Health & Wellness Centre designed to revitalise,
                  re-energise and rejuvenate you through a combination of
                  cutting-edge treatments and ancient healing therapies.
                </p>
                <p>
                  As an award-winning business, Cryospa is dedicated to providing
                  the best service to each and every customer looking for
                  infrared sauna, salt room treatments, and more.
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
              <Card className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 border-0">
                <CardContent className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="size-20 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                      <Heart className="size-10 text-primary" />
                    </div>
                    <p className="text-slate-600 font-medium">Dedicated to Your Wellness</p>
                  </div>
                </CardContent>
              </Card>
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
              >
                <Card className="text-center h-full border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="size-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
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
                  <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
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
                  <p className="text-muted-foreground">{item.description}</p>
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
            <p className="text-white/90 text-lg mb-8">
              Visit us at our Crows Nest location or book online to experience
              the Cryospa difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="xl">
                <Link
                  href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
