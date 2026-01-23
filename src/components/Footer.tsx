import Link from "next/link";

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
            <div className="flex gap-4">
              <a
                href="https://facebook.com/cryospaclinics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cryospaclinics/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/cryospaclinics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
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
                <svg
                  className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-slate-400">
                  21 Falcon St, Crows Nest
                  <br />
                  NSW 2065, Australia
                </span>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-primary-light flex-shrink-0"
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
                <a
                  href="tel:0289647951"
                  className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                >
                  02 8964 7951
                </a>
              </div>
              <div className="flex gap-3">
                <svg
                  className="w-5 h-5 text-primary-light flex-shrink-0"
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
                <a
                  href="mailto:info@cryospaclinics.com"
                  className="text-sm text-slate-400 hover:text-primary-light transition-colors"
                >
                  info@cryospaclinics.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6 pt-6 border-t border-slate-700">
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
