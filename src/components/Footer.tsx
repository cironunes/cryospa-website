import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

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

// Reusable footer link component with hover animation
function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const linkClasses = "group relative text-sm text-slate-200 hover:text-primary-light transition-colors duration-200 inline-flex items-center gap-1";
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-linear-to-r from-primary-light to-accent group-hover:w-full transition-all duration-300" />
        </span>
      </a>
    );
  }
  
  return (
    <Link href={href} className={linkClasses}>
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-linear-to-r from-primary-light to-accent group-hover:w-full transition-all duration-300" />
      </span>
    </Link>
  );
}

// Section header with accent underline
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h4 className="text-white font-semibold text-lg tracking-wide">
        {children}
      </h4>
      <div className="mt-2.5 h-0.5 w-12 bg-linear-to-r from-primary to-accent rounded-full" />
    </div>
  );
}

// Social icon button with hover effects
function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="size-11 rounded-full bg-slate-800/80 hover:bg-linear-to-br hover:from-primary hover:to-primary-light flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-dark text-slate-200">
      {/* Decorative Top Border - Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-primary-light to-accent" />
      
      {/* Main Footer Content */}
      <div className="container-custom pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col items-start">
                <span
                  className="text-3xl md:text-4xl font-serif tracking-wider text-white group-hover:text-primary-light transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  cryospa
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium bg-linear-to-r from-primary-light to-accent bg-clip-text text-transparent mt-1">
                  Revitalise | Reenergise | Rejuvenate
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-200 mb-8 leading-relaxed max-w-xs">
              Sydney&apos;s most complete destination to reboot, revitalise and
              re-energise your mind, body, and soul.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <SocialButton href="https://facebook.com/cryospaclinics" label="Facebook">
                <Facebook className="size-5" />
              </SocialButton>
              <SocialButton href="https://www.instagram.com/cryospaclinics/" label="Instagram">
                <Instagram className="size-5" />
              </SocialButton>
              <SocialButton href="https://twitter.com/cryospaclinics" label="Twitter">
                <Twitter className="size-5" />
              </SocialButton>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <SectionTitle>Our Services</SectionTitle>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <FooterLink href={service.href}>
                    {service.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <SectionTitle>Contact Us</SectionTitle>
            <div className="space-y-5">
              <div className="flex gap-4 group">
                <div className="size-10 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <MapPin className="size-5 text-primary-light" />
                </div>
                <div className="text-sm text-slate-200 leading-relaxed pt-0.5">
                  21 Falcon St, Crows Nest
                  <br />
                  NSW 2065, Australia
                </div>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="size-10 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone className="size-5 text-primary-light" />
                </div>
                <a
                  href="tel:0289647951"
                  className="text-sm text-slate-200 hover:text-primary-light transition-colors duration-200"
                >
                  02 8964 7951
                </a>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="size-10 rounded-lg bg-slate-800/80 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="size-5 text-primary-light" />
                </div>
                <a
                  href="mailto:info@cryospaclinics.com"
                  className="text-sm text-slate-200 hover:text-primary-light transition-colors duration-200"
                >
                  info@cryospaclinics.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="size-4 text-primary-light" />
                <h5 className="text-white font-medium text-sm">
                  Opening Hours
                </h5>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-slate-300">Weekdays</span>
                  <span className="text-slate-200">9am – 1pm / 4pm – 8:30pm</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-slate-300">Weekends</span>
                  <span className="text-slate-200">8am – 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/60">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-300">
              © {new Date().getFullYear()} Cryospa Clinics. All rights reserved.
            </p>
            <p className="text-xs text-slate-300 max-w-xl text-center md:text-right leading-relaxed">
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
