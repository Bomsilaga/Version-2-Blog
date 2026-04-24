"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, CalendarX, AlertTriangle, Moon, FileSearch } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    text: "Your quote took three weeks and the client went elsewhere.",
  },
  {
    icon: TrendingDown,
    text: "You're not sure if your last job lost money until the final invoice.",
  },
  {
    icon: CalendarX,
    text: "You won the tender but the programme is already slipping.",
  },
  {
    icon: AlertTriangle,
    text: "Subcontractor prices moved and you didn't catch it.",
  },
  {
    icon: Moon,
    text: "You're doing estimates at 11pm after a full site day.",
  },
  {
    icon: FileSearch,
    text: "You need a second pair of eyes on a contract before you sign.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
} as const;

export default function PainPoints() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8" aria-label="Pain points">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-6">
              Sound Familiar?
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-charcoal text-balance">
              If any of this sounds familiar, we should talk.
            </h2>
            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-sans text-base text-warm-muted leading-relaxed">
                These aren&rsquo;t edge cases. They&rsquo;re the everyday
                pressures on small builders and tradespeople who are doing real
                work without the back-office support that bigger firms take for
                granted.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center mt-6 font-sans text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors underline underline-offset-4"
              >
                Let&rsquo;s talk about your project →
              </a>
            </div>
          </motion.div>

          {/* Right — pain points list */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-0"
            role="list"
          >
            {painPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.li
                  key={point.text}
                  variants={itemVariants}
                  className="flex items-start gap-5 py-6 border-b border-border group"
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-sm bg-cream-dark flex items-center justify-center group-hover:bg-terracotta/10 transition-colors">
                    <Icon
                      size={16}
                      className="text-terracotta"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-sans text-base lg:text-lg text-charcoal leading-snug">
                    {point.text}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
