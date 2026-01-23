"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex flex-col items-start">
              <span
                className="text-2xl md:text-3xl font-serif tracking-wider text-slate-800"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                cryospa
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-primary">
                Revitalise | Reenergise | Rejuvenate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium text-slate-800">
                                {service.label}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="md:col-span-2 mt-2 pt-2 border-t">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services"
                            className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 text-primary font-medium text-sm"
                          >
                            View All Services →
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
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
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
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
                  className="block py-3 px-2 text-lg font-medium text-slate-800 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="py-2">
                  <span className="px-2 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Services
                  </span>
                  <div className="mt-2 ml-2 pl-4 border-l-2 border-slate-200 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-slate-600 hover:text-primary transition-colors"
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
                    className="block py-3 px-2 text-lg font-medium text-slate-800 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button asChild className="w-full" size="lg">
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
    </header>
  );
}
