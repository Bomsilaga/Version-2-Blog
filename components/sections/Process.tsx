"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "15-minute discovery call",
    description:
      "We talk through your project, what you need, and whether we're the right fit. No commitment, no cost. You walk away knowing if we can help.",
  },
  {
    number: "02",
    title: "Scope + fixed fee agreed in writing",
    description:
      "We send you a clear written scope of work and a fixed fee. No hourly guessing, no billing surprises. You approve it, we start.",
  },
  {
    number: "03",
    title: "Work delivered on time",
    description:
      "We do the work. Estimates, reports, cost plans — delivered in the agreed timeframe, formatted for your use, not ours.",
  },
  {
    number: "04",
    title: "Review call + revisions",
    description:
      "We walk you through the deliverables, answer your questions, and make any agreed revisions. The job isn't done until it's useful to you.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-charcoal"
      aria-label="How we work"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-sans text-sm uppercase tracking-widest text-sandstone mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream max-w-xl text-balance">
            Simple. Transparent. No surprises.
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid lg:grid-cols-4 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10 z-0"
            style={{ left: "calc(100% / 8)", right: "calc(100% / 8)" }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative flex flex-col gap-6 p-8 lg:p-10 ${
                index < steps.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              {/* Step number */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <div className="w-12 h-12 rounded-sm bg-terracotta/20 border border-terracotta/30 flex items-center justify-center flex-shrink-0 z-10 relative">
                  <span className="font-serif text-lg font-bold text-terracotta">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl font-bold text-cream leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="font-sans text-base text-white/60 max-w-md">
            The discovery call is free and takes 15 minutes. If we&rsquo;re
            not the right fit, we&rsquo;ll say so.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-terracotta text-cream text-sm font-sans font-medium rounded-sm hover:bg-terracotta-dark transition-colors tracking-wide flex-shrink-0"
          >
            Book a Discovery Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
