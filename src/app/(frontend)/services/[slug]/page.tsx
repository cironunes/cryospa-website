"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import { getServiceIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";

// Sample service data - in production, this would come from Payload CMS
const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  benefits: string[];
  duration: string;
  price: number;
  priceNote: string;
  icon: string;
  image?: string;
}> = {
  cryotherapy: {
    title: "Whole Body Cryotherapy",
    tagline: "Experience the power of extreme cold",
    description:
      "A revolutionary 3-minute treatment that exposes your body to ultra-cold temperatures, triggering powerful healing and recovery responses.",
    fullDescription: [
      "Athletes, celebrities, chronic pain sufferers and everyday people use the power of three minute whole-body cryotherapy treatments to assist in muscle repair and fatigue, injury treatment and skin rejuvenation.",
      "During a Whole Body Cryotherapy session, you enter a cryotherapy chamber where your body is exposed to extremely cold temperatures (between -110°C to -140°C) for up to three minutes. This triggers your body's natural healing mechanisms.",
      "The cold causes blood to rush to your core to protect vital organs, enriching it with oxygen and nutrients. After the session, this nutrient-rich blood flows back to your extremities, reducing inflammation and promoting healing.",
    ],
    benefits: [
      "Accelerated muscle recovery",
      "Reduced inflammation and pain",
      "Improved athletic performance",
      "Enhanced skin appearance",
      "Boosted metabolism",
      "Improved sleep quality",
      "Elevated mood and energy",
      "Support for injury rehabilitation",
    ],
    duration: "3 minutes",
    price: 65,
    priceNote: "per session",
    icon: "snowflake",
  },
  "infrared-sauna": {
    title: "Infrared Sauna",
    tagline: "Deep heat therapy for total relaxation",
    description:
      "Experience the healing warmth of our premium Clearlight infrared saunas, designed to penetrate deep into your tissues for maximum benefit.",
    fullDescription: [
      "Trust your Sydney sauna to provide you with all the benefits of infrared treatment, including reduced stress, improved sleep, muscle recovery, brightened complexion and faster healing.",
      "Unlike traditional saunas that heat the air around you, infrared saunas use infrared light to directly warm your body. This allows for a more comfortable experience at lower temperatures while providing deeper tissue penetration.",
      "Our Clearlight saunas are medical-grade and emit full-spectrum infrared light, ensuring you receive the maximum therapeutic benefits from each session.",
    ],
    benefits: [
      "Deep tissue detoxification",
      "Reduced stress and fatigue",
      "Improved sleep quality",
      "Muscle and joint pain relief",
      "Weight management support",
      "Enhanced skin health",
      "Improved circulation",
      "Boosted immune function",
    ],
    duration: "30-45 minutes",
    price: 45,
    priceNote: "per session",
    icon: "fire",
  },
  "salt-room": {
    title: "Himalayan Salt Room",
    tagline: "Breathe easy with ancient salt therapy",
    description:
      "Step into our authentic Himalayan salt cave and experience the respiratory and skin benefits that have been known for over 170 years.",
    fullDescription: [
      "The benefits of salt therapy were first discovered more than 170 years ago in the salt mines of Poland. In more recent times, salt caves have been created to replicate the natural microclimate of those salt mines.",
      "Our Himalayan Salt Room features walls lined with authentic pink Himalayan salt blocks, combined with a halogenerator that disperses dry salt aerosol throughout the room.",
      "As you relax in our comfortable salt room, you'll inhale the micro-fine salt particles which help cleanse and detoxify your respiratory system while the salt-enriched environment benefits your skin.",
    ],
    benefits: [
      "Relief from respiratory conditions",
      "Improved skin conditions",
      "Reduced allergies and sinus issues",
      "Enhanced relaxation",
      "Better sleep quality",
      "Natural anti-inflammatory effects",
      "Boosted immune system",
      "Stress reduction",
    ],
    duration: "45 minutes",
    price: 35,
    priceNote: "per session",
    icon: "salt",
  },
  "red-light-therapy": {
    title: "Red Light Therapy",
    tagline: "Cellular rejuvenation through light",
    description:
      "Harness the power of specific red light wavelengths to boost cellular energy, rejuvenate skin, and support muscle recovery.",
    fullDescription: [
      "Red light therapy is a safe whole body treatment where wavelengths of red, natural light are emitted onto the human body and are absorbed by your cells.",
      "The effect of the red light therapy treatment is to enhance a molecule in your body known as Adenosine Triphosphate (ATP), a curious yet extremely powerful substance that boosts the energy of every cell in your body.",
      "Because your cells absorb these powerful wavelengths, the result is cellular rejuvenation. Your skin will look younger, and you'll be reaping the gains of stronger muscles and faster recovery.",
    ],
    benefits: [
      "Reduced wrinkles and fine lines",
      "Improved skin tone and texture",
      "Accelerated wound healing",
      "Reduced inflammation",
      "Enhanced muscle recovery",
      "Reduced joint pain",
      "Improved collagen production",
      "Better circulation",
    ],
    duration: "20 minutes",
    price: 40,
    priceNote: "per session",
    icon: "light",
  },
  "normatec-compression": {
    title: "Normatec Compression Therapy",
    tagline: "Advanced recovery for peak performance",
    description:
      "Experience the same recovery technology used by elite athletes. Our Normatec compression boots help flush out lactic acid and improve circulation.",
    fullDescription: [
      "NormaTec compression boots have rapidly become one of the most popular recovery tools with both athletes and non-athletes alike.",
      "Looking like a treatment plucked from the far flung future, NormaTec Compression Boots have become a staple of athletic performance thanks to the enormous recovery benefits they provide and how straightforward they are to use.",
      "The boots use dynamic compression patterns to massage your limbs, mobilize fluid, and speed recovery. They're perfect after workouts, long flights, or whenever your legs need some extra care.",
    ],
    benefits: [
      "Faster muscle recovery",
      "Reduced muscle soreness",
      "Improved circulation",
      "Decreased swelling",
      "Enhanced flexibility",
      "Reduced lactic acid buildup",
      "Better range of motion",
      "Prevention of delayed onset muscle soreness",
    ],
    duration: "30 minutes",
    price: 35,
    priceNote: "per session",
    icon: "compression",
  },
  "contrast-therapy": {
    title: "Contrast Therapy",
    tagline: "Hot and cold for optimal recovery",
    description:
      "Alternate between heat and cold treatments to stimulate circulation, reduce inflammation, and accelerate your body's natural recovery processes.",
    fullDescription: [
      "Contrast therapy combines the benefits of heat and cold treatments in a single session. By alternating between hot and cold exposure, you trigger powerful physiological responses in your body.",
      "The heat causes blood vessels to dilate, improving circulation and delivering nutrients to your tissues. The cold then causes vasoconstriction, helping to flush out waste products and reduce inflammation.",
      "This alternating pattern creates a 'pumping' action in your circulatory system, enhancing recovery and leaving you feeling refreshed and energized.",
    ],
    benefits: [
      "Enhanced circulation",
      "Accelerated recovery",
      "Reduced inflammation",
      "Improved muscle function",
      "Decreased muscle spasms",
      "Better lymphatic drainage",
      "Increased energy levels",
      "Improved mental clarity",
    ],
    duration: "30 minutes",
    price: 75,
    priceNote: "per session",
    icon: "contrast",
  },
  "lymphatic-drainage": {
    title: "Lymphatic Drainage Massage",
    tagline: "Gentle therapy for deep detoxification",
    description:
      "A specialized massage technique that encourages the natural drainage of lymph, helping to detoxify your body and boost immune function.",
    fullDescription: [
      "Lymphatic drainage massage is a gentle, rhythmic massage treatment that encourages the movement of lymph fluids around the body.",
      "The lymphatic system is part of your immune system and helps rid your body of toxins, waste, and other unwanted materials. Unlike the circulatory system, it doesn't have a pump, relying on muscle movement to function.",
      "Our trained therapists use specialized techniques to stimulate lymph flow, helping to reduce swelling, boost immunity, and promote overall wellness.",
    ],
    benefits: [
      "Reduced water retention",
      "Boosted immune system",
      "Detoxification support",
      "Reduced cellulite appearance",
      "Improved skin health",
      "Relief from chronic fatigue",
      "Reduced stress and anxiety",
      "Post-surgery recovery support",
    ],
    duration: "60 minutes",
    price: 95,
    priceNote: "per session",
    icon: "lymphatic",
  },
  massage: {
    title: "Massage Therapy",
    tagline: "Therapeutic touch for body and mind",
    description:
      "Our skilled therapists offer a range of massage treatments to relieve tension, reduce stress, and promote overall wellbeing.",
    fullDescription: [
      "Massage therapy is one of the oldest healing practices. At Cryospa, our skilled therapists combine traditional techniques with modern knowledge to provide therapeutic treatments tailored to your needs.",
      "Whether you're seeking relief from chronic pain, recovering from an injury, or simply looking to relax and de-stress, our massage services can help.",
      "We offer various massage styles including deep tissue, Swedish, sports massage, and more, all performed in our private, comfortable treatment rooms.",
    ],
    benefits: [
      "Reduced muscle tension",
      "Pain relief",
      "Improved circulation",
      "Enhanced flexibility",
      "Stress reduction",
      "Better sleep quality",
      "Improved posture",
      "Boosted mood",
    ],
    duration: "30-60 minutes",
    price: 70,
    priceNote: "from",
    icon: "hands",
  },
  facials: {
    title: "Premium Facials",
    tagline: "Reveal your natural radiance",
    description:
      "Rejuvenate your skin with our premium facial treatments, using high-quality products and expert techniques for visible results.",
    fullDescription: [
      "Our facial treatments are designed to cleanse, nourish, and rejuvenate your skin. Using premium products and expert techniques, our aestheticians create customized treatments for your skin type and concerns.",
      "Each facial begins with a thorough skin analysis, followed by cleansing, exfoliation, extraction (if needed), mask, and moisturizing treatments. We take the time to ensure your skin receives exactly what it needs.",
      "Whether you're dealing with acne, aging concerns, dehydration, or simply want to maintain healthy, glowing skin, we have a facial treatment for you.",
    ],
    benefits: [
      "Deep cleansing",
      "Improved skin texture",
      "Reduced fine lines",
      "Brighter complexion",
      "Hydration boost",
      "Unclogged pores",
      "Even skin tone",
      "Relaxation and pampering",
    ],
    duration: "45-60 minutes",
    price: 85,
    priceNote: "from",
    icon: "face",
  },
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-800 mb-4">
            Service Not Found
          </h1>
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary mb-6 hover:gap-3 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Services
              </Link>

              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {getServiceIcon(service.icon)}
                </div>
                <div>
                  <h1
                    className="font-serif text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h1>
                  <p className="text-xl text-primary font-medium">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <p className="text-lg text-slate-600">{service.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                  About This Treatment
                </h2>
                <div className="prose prose-slate max-w-none">
                  {service.fullDescription.map((paragraph, index) => (
                    <p key={index} className="text-slate-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mt-10 mb-6">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-600">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-32"
              >
                <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6">
                    Book This Treatment
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                      <span className="text-slate-600">Duration</span>
                      <span className="font-medium text-slate-800">
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Price</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">
                          ${service.price}
                        </span>
                        <span className="text-sm text-slate-500 ml-1">
                          {service.priceNote}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full mb-4"
                  >
                    Book Now
                  </Link>

                  <Link
                    href="/contact"
                    className="btn btn-secondary w-full"
                  >
                    Ask a Question
                  </Link>

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    Free cancellation up to 24 hours before your appointment
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-6 p-6 bg-white border border-slate-200 rounded-2xl">
                  <h4 className="font-medium text-slate-800 mb-4">
                    Need Help?
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:0289647951"
                      className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      02 8964 7951
                    </a>
                    <a
                      href="mailto:info@cryospaclinics.com"
                      className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      info@cryospaclinics.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Ready to Experience {service.title}?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book your session today and take the first step towards better
              health and wellness.
            </p>

            <Button variant="secondary" size="xl">
              <Link
                href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent text-lg px-8 py-4"
              >
                Book Your Session
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
