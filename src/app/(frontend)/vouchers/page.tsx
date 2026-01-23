"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const voucherOptions = [
  {
    value: 50,
    description: "Perfect for trying a single treatment",
    popular: false,
  },
  {
    value: 100,
    description: "Great for a couple of sessions",
    popular: false,
  },
  {
    value: 150,
    description: "Our most gifted amount",
    popular: true,
  },
  {
    value: 200,
    description: "For the wellness enthusiast",
    popular: false,
  },
  {
    value: 250,
    description: "A generous wellness experience",
    popular: false,
  },
  {
    value: "Custom",
    description: "Choose your own amount",
    popular: false,
  },
];

const occasions = [
  { icon: "🎂", label: "Birthday" },
  { icon: "💝", label: "Valentine's Day" },
  { icon: "🎄", label: "Christmas" },
  { icon: "👩", label: "Mother's Day" },
  { icon: "👨", label: "Father's Day" },
  { icon: "🎉", label: "Congratulations" },
  { icon: "💪", label: "Get Well Soon" },
  { icon: "🙏", label: "Thank You" },
];

export default function VouchersPage() {
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
              Gift Vouchers
            </span>
            <h1
              className="font-serif text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Gift of Wellness
            </h1>
            <p className="text-xl text-slate-600">
              Give someone special the gift of relaxation and rejuvenation with
              a Cryospa gift voucher. Perfect for any occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Voucher Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Choose Your Gift Amount"
            subtitle="Select from our popular denominations or choose a custom amount"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {voucherOptions.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 text-center cursor-pointer transition-all hover:shadow-lg ${
                  option.popular
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-50 hover:bg-slate-100"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <span className="px-2 py-0.5 bg-accent text-white text-[10px] font-semibold rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <div
                  className={`text-2xl font-bold mb-2 ${
                    option.popular ? "text-white" : "text-slate-800"
                  }`}
                >
                  {typeof option.value === "number" ? `$${option.value}` : option.value}
                </div>
                <p
                  className={`text-xs ${
                    option.popular ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Purchase Gift Voucher
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Perfect for Every Occasion"
            subtitle="Whether it's a birthday, holiday, or just because - wellness makes a wonderful gift"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm"
              >
                <span className="text-xl">{occasion.icon}</span>
                <span className="text-slate-700 font-medium">{occasion.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="How It Works"
            subtitle="Giving the gift of wellness is easy"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Choose Amount",
                description:
                  "Select from our preset values or enter a custom amount.",
              },
              {
                step: "2",
                title: "Personalize",
                description:
                  "Add a personal message and choose delivery method.",
              },
              {
                step: "3",
                title: "Send & Enjoy",
                description:
                  "Voucher is emailed instantly or printed for gifting.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about gift vouchers"
          />

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                question: "How long are gift vouchers valid?",
                answer:
                  "Gift vouchers are valid for 3 years from the date of purchase.",
              },
              {
                question: "Can vouchers be used for any treatment?",
                answer:
                  "Yes! Gift vouchers can be used towards any treatment or product at Cryospa Clinics.",
              },
              {
                question: "Can I check the balance of a voucher?",
                answer:
                  "Yes, simply contact us or visit the clinic and we can check the remaining balance for you.",
              },
              {
                question: "Are gift vouchers refundable?",
                answer:
                  "Gift vouchers are non-refundable but are transferable to another person.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <h4 className="font-semibold text-slate-800 mb-2">
                  {faq.question}
                </h4>
                <p className="text-slate-600 text-sm">{faq.answer}</p>
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
              Give the Gift of Wellness Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Instant delivery. No expiry stress. The perfect present for anyone
              who deserves some self-care.
            </p>
            <Link
              href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent text-lg px-8 py-4"
            >
              Purchase Gift Voucher
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
