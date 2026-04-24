"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    abbr: "MIEAust",
    full: "Member, Engineers Australia",
    note: "Chartered",
  },
  {
    abbr: "MNSE",
    full: "Member, Nigerian Society of Engineers",
    note: "Chartered",
  },
  {
    abbr: "MCM",
    full: "Master of Construction Management",
    note: "Deakin University — in progress",
  },
  {
    abbr: "RegPM",
    full: "Registered Project Manager",
    note: "Engineers Australia — in progress",
  },
  {
    abbr: "ABN",
    full: "47 828 511 857",
    note: "Jokjeth Services T/A OnGroundPM",
  },
];

export default function Credentials() {
  return (
    <section
      className="py-14 lg:py-16 px-6 lg:px-8 bg-cream-dark border-y border-border"
      aria-label="Credentials and registrations"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          {credentials.map((cred, index) => (
            <div
              key={cred.abbr}
              className={`flex flex-col gap-1 ${
                index < credentials.length - 1
                  ? "pr-8 border-r border-border last:border-0 last:pr-0"
                  : ""
              }`}
            >
              <span className="font-serif text-xl font-bold text-charcoal">
                {cred.abbr}
              </span>
              <span className="font-sans text-xs text-warm-muted leading-snug">
                {cred.full}
              </span>
              <span className="font-sans text-[10px] text-sandstone uppercase tracking-wider">
                {cred.note}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
