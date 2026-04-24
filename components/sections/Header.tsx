"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/content/site";

const { nav, brand } = siteContent;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream border-b border-border ${
        scrolled ? "shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label={`${brand.name} — Home`}
          >
            {/* TODO: Replace logo.jpg with an SVG for crisp scaling and transparency — keeping header bg-cream until then to prevent white-box artefact. */}
            <Image
              src={brand.logo}
              alt={brand.logoAlt}
              width={200}
              height={52}
              className="h-12 w-auto object-contain"
              priority
              onError={(e) => {
                // Fall back to text wordmark if logo not yet uploaded
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const sibling = target.nextElementSibling as HTMLElement | null;
                if (sibling) sibling.style.display = "block";
              }}
            />
            <span
              className="font-serif text-xl lg:text-2xl font-bold text-charcoal tracking-tight"
              style={{ display: "none" }}
            >
              {brand.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans text-warm-muted hover:text-charcoal transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={nav.ctaHref}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-terracotta text-cream text-sm font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors duration-200 tracking-wide"
            >
              {nav.cta}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-charcoal hover:text-terracotta transition-colors"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-border bg-cream/98 backdrop-blur-md pb-6"
          >
            <nav
              className="flex flex-col gap-1 pt-4"
              aria-label="Mobile navigation"
            >
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-2 py-3 text-base font-sans text-charcoal hover:text-terracotta transition-colors border-b border-border/40 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={nav.ctaHref}
                onClick={handleNavClick}
                className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-terracotta text-cream text-sm font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors"
              >
                {nav.cta}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
