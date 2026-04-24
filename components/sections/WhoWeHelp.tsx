"use client";

import { motion } from "framer-motion";
import { HardHat, Home, User, Wrench } from "lucide-react";

const audiences = [
  {
    icon: HardHat,
    title: "Small Builders",
    description:
      "You're winning work but margin is thin and estimating eats your evenings. We give you professional cost plans and programme oversight so you can focus on running the job.",
  },
  {
    icon: Home,
    title: "Renovators",
    description:
      "Budgets blow out when there's no one controlling variations and subcontractor costs. We bring structure and accountability to your renovation from day one.",
  },
  {
    icon: User,
    title: "Owner-Builders",
    description:
      "You're managing the build yourself and need a qualified set of eyes on the numbers and timeline. We provide the professional backup that keeps your project on track.",
  },
  {
    icon: Wrench,
    title: "Tradespeople Stepping Up",
    description:
      "You've been on the tools and now you're taking on your first project as a builder. We help you understand the full cost picture and manage the commercial side professionally.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function WhoWeHelp() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8" aria-label="Who we help">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
            Who We Help
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal max-w-2xl text-balance">
            Built for the people doing the real work.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
        >
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <motion.article
                key={audience.title}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="bg-cream p-8 lg:p-10 flex flex-col gap-5 hover:bg-cream-dark transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                  <Icon
                    size={20}
                    className="text-terracotta"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {audience.title}
                </h3>
                <p className="font-sans text-sm text-warm-muted leading-relaxed flex-1">
                  {audience.description}
                </p>
                <a
                  href="#contact"
                  className="font-sans text-xs uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors mt-auto pt-4 border-t border-border"
                >
                  Get in touch →
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
