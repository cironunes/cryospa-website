import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Cryotherapy", href: "/services/cryotherapy" },
  { label: "Infrared Sauna", href: "/services/infrared-sauna" },
  { label: "Himalayan Salt Room", href: "/services/salt-room" },
  { label: "Red Light Therapy", href: "/services/red-light-therapy" },
  { label: "Normatec Compression", href: "/services/normatec-compression" },
  { label: "Massage Therapy", href: "/services/massage" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gift Vouchers", href: "/vouchers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-slate-300">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col items-start">
                <span
                  className="text-3xl font-serif tracking-wider text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  cryospa
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-primary-light">
                  Revitalise | Reenergise | Rejuvenate
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Sydney&apos;s most complete destination to reboot, revitalise and
              re-energise your mind, body, and soul.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white"
                asChild
              >
                <a
                  href="https://facebook.com/cryospaclinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="size-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white"
                asChild
              >
                <a
                  href="https://www.instagram.com/cryospaclinics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-full bg-slate-800 hover:bg-primary text-slate-300 hover:text-white"
                asChild
              >
                <a
                  href="https://twitter.com/cryospaclinics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="size-5 text-primary-light flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  21 Falcon St, Crows Nest
                  <br />
                  NSW 2065, Australia
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="size-5 text-primary-light flex-shrink-0" />
                <a
                  href="tel:0289647951"
                  className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                >
                  02 8964 7951
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="size-5 text-primary-light flex-shrink-0" />
                <a
                  href="mailto:info@cryospaclinics.com"
                  className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                >
                  info@cryospaclinics.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <Separator className="my-6 bg-slate-700" />
            <div>
              <h5 className="text-white font-medium mb-3 text-sm">
                Opening Hours
              </h5>
              <div className="space-y-1 text-sm text-slate-400">
                <p>
                  <span className="text-slate-500">Weekdays:</span> 9am – 1pm /
                  4pm – 8:30pm
                </p>
                <p>
                  <span className="text-slate-500">Weekends:</span> 8am – 6pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Cryospa Clinics. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 max-w-xl text-center md:text-right">
              Cryospa Clinics offers alternative treatments. None of which are
              meant to cure disease. Please consult with your medical
              professional prior to our treatments.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
