import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryospa Clinics | Sydney's Premier Health & Wellness Centre",
  description:
    "Experience the ultimate in wellness treatments at Cryospa Clinics. Offering infrared sauna, salt room therapy, red light therapy, and more in Crows Nest, Sydney.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
