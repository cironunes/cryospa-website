"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const pricingCategories = [
  {
    title: "Cryotherapy",
    services: [
      { name: "Single Session", price: 65, duration: "3 min" },
      { name: "3 Session Pack", price: 175, note: "Save $20" },
      { name: "5 Session Pack", price: 275, note: "Save $50" },
      { name: "10 Session Pack", price: 500, note: "Save $150" },
    ],
  },
  {
    title: "Infrared Sauna",
    services: [
      { name: "Single Session (1 person)", price: 45, duration: "30 min" },
      { name: "Single Session (2 people)", price: 70, duration: "30 min" },
      { name: "Extended Session", price: 55, duration: "45 min" },
      { name: "5 Session Pack", price: 200, note: "Save $25" },
    ],
  },
  {
    title: "Salt Room",
    services: [
      { name: "Single Session", price: 35, duration: "45 min" },
      { name: "Couple Session", price: 60, duration: "45 min" },
      { name: "5 Session Pack", price: 150, note: "Save $25" },
      { name: "10 Session Pack", price: 280, note: "Save $70" },
    ],
  },
  {
    title: "Red Light Therapy",
    services: [
      { name: "Single Session", price: 40, duration: "20 min" },
      { name: "5 Session Pack", price: 175, note: "Save $25" },
      { name: "10 Session Pack", price: 320, note: "Save $80" },
    ],
  },
  {
    title: "Compression Therapy",
    services: [
      { name: "Normatec Legs", price: 35, duration: "30 min" },
      { name: "Normatec Full Body", price: 50, duration: "30 min" },
      { name: "5 Session Pack (Legs)", price: 150, note: "Save $25" },
    ],
  },
  {
    title: "Massage & Treatments",
    services: [
      { name: "Lymphatic Drainage", price: 95, duration: "60 min" },
      { name: "Remedial Massage", price: 70, duration: "30 min" },
      { name: "Remedial Massage", price: 100, duration: "60 min" },
      { name: "Facial Treatment", price: 85, duration: "45 min" },
    ],
  },
];

const packages = [
  {
    name: "Recovery Package",
    description: "Perfect for athletes and active individuals",
    price: 120,
    includes: ["Cryotherapy Session", "Normatec Compression", "Red Light Therapy"],
    popular: false,
  },
  {
    name: "Wellness Package",
    description: "Our most popular combination",
    price: 130,
    includes: ["Infrared Sauna (30 min)", "Salt Room Session", "Red Light Therapy"],
    popular: true,
  },
  {
    name: "Ultimate Package",
    description: "The complete Cryospa experience",
    price: 180,
    includes: ["Cryotherapy Session", "Infrared Sauna (30 min)", "Salt Room Session", "Normatec Compression"],
    popular: false,
  },
];

export default function PricingPage() {
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
              Pricing
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600">
              Choose from individual treatments or save with our value packs and
              packages. All prices are in AUD.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Popular Packages"
            subtitle="Get more value with our curated treatment combinations"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 lg:p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl scale-105"
                    : "bg-slate-50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${pkg.popular ? "text-white" : "text-slate-800"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm ${pkg.popular ? "text-white/80" : "text-slate-600"}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "text-primary"}`}>
                    ${pkg.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={pkg.popular ? "text-white/90" : "text-slate-600"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full ${
                    pkg.popular
                      ? "bg-white text-primary hover:bg-white/90"
                      : "btn-primary"
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Individual Services"
            subtitle="View pricing for all our treatments and multi-session packs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-4 border-b border-slate-100">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex items-center justify-between">
                      <div>
                        <span className="text-slate-700">{service.name}</span>
                        {service.duration && (
                          <span className="text-xs text-slate-400 ml-2">
                            ({service.duration})
                          </span>
                        )}
                        {service.note && (
                          <span className="block text-xs text-primary">
                            {service.note}
                          </span>
                        )}
                      </div>
                      <span className="font-semibold text-slate-800">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
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
              Ready to Book?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              All treatments can be booked online. First time? Contact us for a
              complimentary consultation to find the best treatment for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book Online
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
