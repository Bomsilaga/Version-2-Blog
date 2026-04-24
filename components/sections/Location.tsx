"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const suburbs = [
  "Wyndham Vale",
  "Tarneit",
  "Point Cook",
  "Werribee",
  "Truganina",
  "Hoppers Crossing",
  "Melton",
];

export default function Location() {
  return (
    <section
      className="py-24 lg:py-32 px-6 lg:px-8"
      aria-label="Service area"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
              Where We Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-8 text-balance">
              Serving Melbourne&rsquo;s West.
            </h2>
            <p className="font-sans text-base text-warm-muted leading-relaxed mb-10 max-w-md">
              We&rsquo;re based in and focused on Melbourne&rsquo;s western
              growth corridor — one of the most active construction zones in
              Victoria. We know the local builders, the local subcontractors,
              and the local cost rates.
            </p>
            <p className="font-sans text-sm text-warm-muted leading-relaxed max-w-md">
              Working on a project outside these suburbs? Get in touch — if
              we can help, we will.
            </p>
          </motion.div>

          {/* Right — suburb list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-cream-dark border border-border rounded-sm p-10 lg:p-12"
          >
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
              <MapPin
                size={18}
                className="text-terracotta flex-shrink-0"
                aria-hidden="true"
              />
              <p className="font-sans text-sm uppercase tracking-widest text-warm-muted">
                Service Area
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-0" role="list">
              {suburbs.map((suburb, index) => (
                <motion.li
                  key={suburb}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className={`flex items-center gap-4 py-4 ${
                    index < suburbs.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-serif text-xl font-medium text-charcoal">
                    {suburb}
                  </span>
                  <span className="font-sans text-xs text-warm-muted ml-auto uppercase tracking-wider">
                    VIC
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
