"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const services = [
  { label: "Cryotherapy", href: "/services/cryotherapy", description: "Whole body cold therapy for recovery" },
  { label: "Infrared Sauna", href: "/services/infrared-sauna", description: "Deep heat therapy for relaxation" },
  { label: "Himalayan Salt Room", href: "/services/salt-room", description: "Respiratory and skin benefits" },
  { label: "Red Light Therapy", href: "/services/red-light-therapy", description: "Cellular rejuvenation" },
  { label: "Normatec Compression", href: "/services/normatec-compression", description: "Athletic recovery boots" },
  { label: "Contrast Therapy", href: "/services/contrast-therapy", description: "Hot and cold alternating" },
  { label: "Lymphatic Drainage", href: "/services/lymphatic-drainage", description: "Gentle detox massage" },
  { label: "Massage Therapy", href: "/services/massage", description: "Therapeutic bodywork" },
  { label: "Facials", href: "/services/facials", description: "Skin rejuvenation treatments" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// Custom nav link component with animated underline
function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-primary",
        "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-primary after:to-accent",
        "after:transition-all after:duration-300 after:-translate-x-1/2",
        "hover:after:w-3/4",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Header */}
      <div
        className={cn(
          "transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3"
            : "bg-linear-to-b from-white/50 to-transparent py-4"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <div className="flex flex-col items-start">
                <span
                  className={cn(
                    "text-2xl md:text-3xl font-serif tracking-wider transition-colors duration-300",
                    isScrolled ? "text-slate-800" : "text-slate-900"
                  )}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  cryospa
                </span>
                {/* <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Revitalise | Reenergise | Rejuvenate
                </span> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavLink href="/">Home</NavLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[550px] gap-1 p-5 md:grid-cols-2">
                        {services.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="group block select-none rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-linear-to-br hover:from-primary/5 hover:to-accent/5"
                              >
                                <div className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">
                                  {service.label}
                                </div>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="md:col-span-2 mt-3 pt-3 border-t border-slate-100">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services"
                              className="flex items-center gap-2 select-none rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 text-primary font-semibold text-sm"
                            >
                              <Sparkles className="size-4" />
                              View All Services
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {navItems.slice(1).map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <NavLink href={item.href}>{item.label}</NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild size="default" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <Link
                  href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Toggle menu" className="hover:bg-primary/10">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <span
                      className="text-2xl font-serif tracking-wider text-slate-800"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      cryospa
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-1">
                  <Link
                    href="/"
                    className="block py-3 px-3 text-lg font-medium text-slate-800 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="py-3">
                    <span className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Services
                    </span>
                    <div className="mt-3 ml-3 pl-4 border-l-2 border-gradient-to-b from-primary/30 to-accent/30 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block py-2 px-2 text-slate-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {navItems.slice(1).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-3 text-lg font-medium text-slate-800 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent rounded-xl transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button asChild className="w-full shadow-lg" size="lg">
                    <Link
                      href="https://www.fresha.com/a/cryospa-clinics-crows-nest-21-falcon-street-jkjitqzk/booking?menu=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>

      {/* Gradient Accent Line */}
      <div
        className={cn(
          "h-0.5 bg-gradient-to-r from-primary via-primary-light to-accent transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
