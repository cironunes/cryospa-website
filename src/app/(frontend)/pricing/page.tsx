"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const pricingCategories = [
  {
    title: "Infrared Sauna",
    services: [
      { name: "30 min – Single", price: 33, duration: "30 min" },
      { name: "30 min – 5 pack", price: 132, note: "3 & 5 pack: 3-month expiry; 10 pack: 6-month" },
      { name: "30 min – 10 pack", price: 242 },
      { name: "45 min – Single", price: 44, duration: "45 min" },
      { name: "45 min – 5 pack", price: 190 },
      { name: "1 hour – Single", price: 55, duration: "1 hour" },
      { name: "1 hour – 5 pack", price: 242 },
      { name: "Extra guest", price: 15, note: "Max 4 people per session" },
    ],
  },
  {
    title: "Salt Room",
    services: [
      { name: "Single", price: 45 },
      { name: "Family (2 adults + 3 children)", price: 105 },
      { name: "Intro 3 pack", price: 90, note: "New clients only; 30-day expiry" },
      { name: "5 pack", price: 175 },
      { name: "10 pack", price: 300 },
      { name: "10 pack family", price: 360 },
      { name: "Extra guest", price: 20, note: "Max 3 adults per session" },
    ],
  },
  {
    title: "Red Light Therapy",
    services: [
      { name: "Single", price: 50 },
      { name: "Intro Pack", price: 120, note: "New clients only; 30-day expiry" },
      { name: "3 pack", price: 140 },
      { name: "5 pack", price: 225 },
      { name: "10 pack", price: 400 },
    ],
  },
  {
    title: "NormaTec Compression Therapy",
    services: [
      { name: "30 min – Single", price: 35, duration: "30 min" },
      { name: "30 min – Intro / 3 / 5 / 10 pack", price: 0, note: "Intro $70, 3 pack $95, 5 pack $150, 10 pack $280" },
      { name: "60 min – Single", price: 50, duration: "60 min" },
      { name: "60 min – Intro / 3 / 5 / 10 pack", price: 0, note: "Intro $100, 3 pack $140, 5 pack $220, 10 pack $360" },
      { name: "Extra guest (30 min / 60 min)", price: 0, note: "$30 / $45" },
    ],
  },
  {
    title: "Cryotherapy",
    services: [
      { name: "Single", price: 95 },
      { name: "Two people", price: 160, note: "Total" },
      { name: "Three people", price: 225, note: "Total" },
      { name: "Four people", price: 280, note: "Total" },
      { name: "Five people", price: 325, note: "Total" },
      { name: "Intro Pack", price: 170, note: "New clients; 30-day expiry" },
      { name: "3 pack", price: 225 },
      { name: "5 pack", price: 350 },
      { name: "10 pack", price: 670 },
    ],
  },
  {
    title: "Lymphatic Drainage",
    services: [
      { name: "Lymphatic Relief", price: 120, duration: "45 min" },
      { name: "No Flow No Glow", price: 240, duration: "90 min" },
      { name: "Lymphatic Drainage Massage", price: 150, duration: "60 min" },
      { name: "Post-Op Lymphatic Drainage", price: 170, duration: "75 min" },
      { name: "Pregnancy Lymph Drainage", price: 150, duration: "60 min" },
      { name: "Quantic Lymphatic Drainage", price: 190, duration: "60 min" },
      { name: "Dry Brushing Lymphatic Bliss", price: 200, duration: "75 min" },
      { name: "Lymphatic Facial", price: 60, duration: "30 min" },
    ],
  },
  {
    title: "Massage & Treatments",
    services: [
      { name: "Me Time Massage", price: 130, duration: "1 hr" },
      { name: "Brazilian Sculpt Massage", price: 190, duration: "1 hr" },
      { name: "Chinese Foot Massage (Reflexology)", price: 110, duration: "40 min" },
    ],
  },
  {
    title: "Facials",
    services: [
      { name: "Me Time Facial", price: 120, duration: "45 min" },
      { name: "Glow Me Time Facial", price: 160, duration: "45 min + 15 min collagen bed" },
      { name: "Deep Cleansing", price: 240, duration: "90 min" },
      { name: "Glow Deep Cleansing", price: 280, duration: "90 min + 15 min collagen bed" },
      { name: "Microneedling Face, Neck & Décolleté", price: 360, duration: "60 min + red light" },
    ],
  },
];

const packages = [
  {
    name: "Contrast Therapy",
    description: "Cryo + sauna + cold shower",
    price: 99,
    priceTwo: 160,
    includes: ["Cryotherapy", "Infrared Sauna", "Cold shower"],
    popular: false,
  },
  {
    name: "Re-Energise Combo",
    description: "Cryo + sauna + salt room",
    price: 139,
    priceTwo: 230,
    includes: ["Cryotherapy", "Infrared Sauna", "Salt Room Halotherapy"],
    popular: true,
  },
  {
    name: "Revitalise Combo",
    description: "Cryo + sauna + Normatec",
    price: 139,
    priceTwo: 230,
    includes: ["Cryotherapy", "Infrared Sauna", "Normatec Compression"],
    popular: false,
  },
  {
    name: "Rejuvinate Combo",
    description: "Cryo + sauna",
    price: 99,
    priceTwo: 160,
    includes: ["Cryotherapy", "Infrared Sauna"],
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
            <p className="text-xl text-muted-foreground">
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
            title="Combination Treatments"
            subtitle="Get more value with our curated treatment combinations"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "relative h-full py-0",
                  pkg.popular
                    ? "bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-xl scale-105"
                    : "bg-slate-50 border-0"
                )}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="accent" className="shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pt-8 pb-2">
                    <CardTitle className={cn(
                      "text-xl mb-2",
                      pkg.popular ? "text-white" : "text-slate-800"
                    )}>
                      {pkg.name}
                    </CardTitle>
                    <p className={cn(
                      "text-sm",
                      pkg.popular ? "text-white/80" : "text-muted-foreground"
                    )}>
                      {pkg.description}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-4 pb-8">
                    <div className="text-center mb-6">
                      <span className={cn(
                        "text-4xl font-bold",
                        pkg.popular ? "text-white" : "text-primary"
                      )}>
                        ${pkg.price}
                      </span>
                      {"priceTwo" in pkg && pkg.priceTwo != null && (
                        <span className={cn(
                          "block text-lg font-medium mt-1",
                          pkg.popular ? "text-white/90" : "text-muted-foreground"
                        )}>
                          2 persons ${pkg.priceTwo}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Check className={cn(
                            "size-5 flex-shrink-0",
                            pkg.popular ? "text-accent" : "text-primary"
                          )} />
                          <span className={pkg.popular ? "text-white/90" : "text-muted-foreground"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className="w-full"
                      variant={pkg.popular ? "secondary" : "default"}
                    >
                      <Link
                        href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
              >
                <Card className="h-full border-0 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg border-b pb-4">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.services.map((service) => (
                      <div key={`${service.name}-${service.price}-${service.duration}`} className="flex items-center justify-between">
                        <div>
                          <span className="text-slate-700">{service.name}</span>
                          {service.duration && (
                            <span className="text-xs text-muted-foreground ml-2">
                              ({service.duration})
                            </span>
                          )}
                          {service.note && (
                            <span className="block text-xs text-primary font-medium">
                              {service.note}
                            </span>
                          )}
                        </div>
                        <span className="font-semibold text-slate-800">
                          {service.price > 0 ? `$${service.price}` : service.note ?? "—"}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
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
            <p className="text-lg text-muted-foreground mb-4">
              All treatments can be booked online. First time? Contact us for a
              complimentary consultation to find the best treatment for you.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              A 15% surcharge applies for services on holidays and weekends. All memberships and pack purchases are non-transferable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link
                  href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Online
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
