"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 lg:px-8 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background texture — subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #1a1a1a 0px, #1a1a1a 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />

      {/* Decorative terracotta accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-32 left-6 lg:left-8 w-16 h-0.5 bg-terracotta origin-left"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-sans text-sm uppercase tracking-widest text-terracotta mb-8"
          >
            Melbourne&rsquo;s West · Construction PM &amp; Estimating
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight text-charcoal mb-8 text-balance"
          >
            Accurate costs.{" "}
            <span className="text-terracotta italic">Honest</span> timelines.
            <br />
            On the ground,
            <br />
            where it matters.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="font-sans text-lg lg:text-xl text-warm-muted max-w-2xl leading-relaxed mb-10"
          >
            Fixed-price estimates and hands-on project management for small
            builders, renovators and owner-builders across Melbourne&rsquo;s
            western suburbs. No surprises. No jargon. Just the numbers you
            can build with.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream text-base font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors duration-200 tracking-wide"
            >
              Get a Fixed-Price Quote
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-charcoal text-base font-sans font-medium rounded-sm hover:bg-charcoal hover:text-cream transition-colors duration-200 tracking-wide"
            >
              See How We Work
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            {["MIEAust", "MNSE", "14+ years", "Based in Melbourne's West"].map(
              (item, i) => (
                <span key={item} className="flex items-center gap-4">
                  <span className="font-sans text-sm text-warm-muted">
                    {item}
                  </span>
                  {i < 3 && (
                    <span
                      className="w-1 h-1 rounded-full bg-sandstone"
                      aria-hidden="true"
                    />
                  )}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-warm-muted rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-sandstone to-transparent" />
      </motion.div>
    </section>
  );
}
