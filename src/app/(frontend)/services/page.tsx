"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getServiceIcon } from "@/components/Icons";
import Link from "next/link";

const allServices = [
  {
    title: "Whole Body Cryotherapy",
    description:
      "Athletes, celebrities, chronic pain sufferers and everyday people use the power of three minute whole-body cryotherapy treatments to assist in muscle repair and fatigue, injury treatment and skin rejuvenation.",
    href: "/services/cryotherapy",
    icon: "snowflake",
    duration: "3 minutes",
    price: 65,
    category: "Recovery",
  },
  {
    title: "Infrared Sauna",
    description:
      "Trust your Sydney sauna to provide you with all the benefits of infrared treatment, including reduced stress, improved sleep, muscle recovery, brightened complexion and faster healing.",
    href: "/services/infrared-sauna",
    icon: "fire",
    duration: "30-45 minutes",
    price: 45,
    category: "Relaxation",
  },
  {
    title: "Himalayan Salt Room",
    description:
      "The benefits of salt therapy were first discovered more than 170 years ago. Our salt cave replicates the natural microclimate effective in aiding respiratory issues and skin conditions.",
    href: "/services/salt-room",
    icon: "salt",
    duration: "45 minutes",
    price: 35,
    category: "Respiratory",
  },
  {
    title: "Red Light Therapy",
    description:
      "Red light therapy is a safe whole body treatment where wavelengths of red, natural light are emitted onto the human body and absorbed by your cells, enhancing ATP production.",
    href: "/services/red-light-therapy",
    icon: "light",
    duration: "20 minutes",
    price: 40,
    category: "Skin & Recovery",
  },
  {
    title: "Normatec Compression",
    description:
      "NormaTec compression boots have rapidly become one of the most popular recovery tools with both athletes and non-athletes alike, providing enormous recovery benefits.",
    href: "/services/normatec-compression",
    icon: "compression",
    duration: "30 minutes",
    price: 35,
    category: "Recovery",
  },
  {
    title: "Contrast Therapy",
    description:
      "Alternate between hot and cold treatments to stimulate blood flow, reduce inflammation, and accelerate recovery. Perfect for athletes and those seeking enhanced wellness.",
    href: "/services/contrast-therapy",
    icon: "contrast",
    duration: "30 minutes",
    price: 75,
    category: "Recovery",
  },
  {
    title: "Lymphatic Drainage",
    description:
      "Specialized massage technique that encourages the natural drainage of the lymph, which carries waste products away from the tissues back toward the heart.",
    href: "/services/lymphatic-drainage",
    icon: "lymphatic",
    duration: "60 minutes",
    price: 95,
    category: "Massage",
  },
  {
    title: "Massage Therapy",
    description:
      "Our skilled therapists offer a range of massage treatments to relieve tension, reduce stress, and promote overall wellbeing through targeted therapeutic techniques.",
    href: "/services/massage",
    icon: "hands",
    duration: "30-60 minutes",
    price: 70,
    category: "Massage",
  },
  {
    title: "Facials",
    description:
      "Rejuvenate your skin with our premium facial treatments. Our expert aestheticians use high-quality products to cleanse, exfoliate, and nourish your skin.",
    href: "/services/facials",
    icon: "face",
    duration: "45-60 minutes",
    price: 85,
    category: "Skin",
  },
];

const categories = ["All", "Recovery", "Relaxation", "Respiratory", "Skin & Recovery", "Massage", "Skin"];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Premium Wellness Treatments
            </h1>
            <p className="text-xl text-slate-600">
              Discover our range of cutting-edge wellness treatments designed to
              help you feel your best. Each service is delivered in private,
              dedicated treatment rooms by our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                icon={getServiceIcon(service.icon)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team is here to help you find the perfect treatment for your
              needs. Contact us for a complimentary consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
