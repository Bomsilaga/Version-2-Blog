import Image from "next/image";
import { siteContent } from "@/content/site";

const { brand, footer, contact: contactInfo } = siteContent;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-12 lg:py-16 px-6 lg:px-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              aria-label={`${brand.name} — Home`}
              className="inline-block mb-4"
            >
              {/* TODO: Replace logo.jpg with an SVG for crisp scaling and transparency — the current JPG has a white background that is visible on this dark footer. */}
              <Image
                src={brand.logo}
                alt={brand.logoAlt}
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="font-sans text-sm text-white/50 mt-2 max-w-xs leading-relaxed">
              {footer.tagline}
            </p>
            <p className="font-sans text-xs text-white/30 mt-4">
              ABN 47 828 511 857 · Jokjeth Services Pty Ltd T/A OnGroundPM
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-white/30 mb-4">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3" role="list">
                {footer.navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-sans text-sm text-white/50 hover:text-cream transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-white/30 mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block font-sans text-sm text-white/50 hover:text-cream transition-colors"
              >
                {contactInfo.email}
              </a>
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="block font-sans text-sm text-white/50 hover:text-cream transition-colors"
                >
                  {contactInfo.phone}
                </a>
              )}
              <p className="font-sans text-xs text-white/30 mt-4 leading-relaxed">
                Melbourne&rsquo;s West, VIC, Australia
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href={footer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center hover:bg-terracotta/80 transition-colors"
                aria-label="OnGroundPM on LinkedIn"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/70"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            &copy; {year} Jokjeth Services Pty Ltd trading as OnGroundPM. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            {footer.credentialsLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
