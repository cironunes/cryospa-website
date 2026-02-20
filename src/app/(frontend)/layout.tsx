import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cryospa Clinics | Sydney's Premier Health & Wellness Centre",
  description:
    "Experience the ultimate in wellness treatments at Cryospa Clinics. Offering infrared sauna, salt room therapy, red light therapy, and more in Crows Nest, Sydney.",
  keywords: [
    "infrared sauna",
    "salt room therapy",
    "wellness centre",
    "crows nest",
    "red light therapy",
    "normatec compression",
  ],
  openGraph: {
    title: "Cryospa Clinics | Sydney's Premier Health & Wellness Centre",
    description:
      "Revitalise, re-energise, and rejuvenate at Sydney's award-winning wellness centre.",
    type: "website",
    locale: "en_AU",
  },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
