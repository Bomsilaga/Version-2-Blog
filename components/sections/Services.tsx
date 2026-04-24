"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    tier: "Tier 1",
    name: "Quick Estimate",
    tagline: "Know your numbers before you commit.",
    description:
      "A single, detailed cost estimate for your project. Ideal for small builds, renovations, and extensions where you need accurate figures fast — for quoting, budgeting, or going to tender.",
    inclusions: [
      "Detailed elemental cost estimate",
      "Material and labour breakdown",
      "Preliminary and contingency allowances",
      "Written summary report",
      "One round of revisions",
    ],
    pricing: "Fixed fee — quoted upfront",
    turnaround: "72-hour turnaround",
    highlight: false,
  },
  {
    tier: "Tier 2",
    name: "Project Oversight",
    tagline: "Cost control and programme on an active job.",
    description:
      "Ongoing cost management and programme monitoring for a single active project. Monthly retainer keeps your budget and timeline in check throughout the build, without the overhead of a full-time PM.",
    inclusions: [
      "Monthly cost reports and variance analysis",
      "Programme monitoring and progress tracking",
      "Subcontractor invoice review",
      "Variation assessment and negotiation support",
      "Monthly catch-up call",
    ],
    pricing: "Monthly retainer — agreed at scope",
    turnaround: "Ongoing engagement",
    highlight: true,
  },
  {
    tier: "Tier 3",
    name: "Full PM Partnership",
    tagline: "A professional PM without hiring one full-time.",
    description:
      "End-to-end project management for builders who want senior oversight across procurement, scheduling, cost control and delivery — from kick-off through to handover.",
    inclusions: [
      "Full project setup and planning",
      "Procurement and subcontractor management",
      "Programme development and control",
      "Cost management throughout",
      "Defects management and handover",
    ],
    pricing: "Percentage of project value",
    turnaround: "Duration of project",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-cream-dark"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
            What We Do
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal max-w-xl text-balance">
              Three ways to work together.
            </h2>
            <p className="font-sans text-base text-warm-muted max-w-sm leading-relaxed">
              Every engagement starts with a conversation. We scope the work,
              agree a fixed fee in writing, and get to work.
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.name}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col p-8 lg:p-10 rounded-sm border ${
                service.highlight
                  ? "bg-charcoal border-charcoal text-cream"
                  : "bg-cream border-border hover:border-sandstone/60 transition-colors"
              }`}
              aria-label={service.name}
            >
              {service.highlight && (
                <div className="absolute top-6 right-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-sandstone border border-sandstone/40 px-2 py-1 rounded-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p
                  className={`font-sans text-xs uppercase tracking-widest mb-3 ${
                    service.highlight ? "text-sandstone" : "text-terracotta"
                  }`}
                >
                  {service.tier}
                </p>
                <h3
                  className={`font-serif text-2xl lg:text-3xl font-bold mb-3 ${
                    service.highlight ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`font-sans text-sm font-medium mb-4 ${
                    service.highlight ? "text-sandstone" : "text-terracotta"
                  }`}
                >
                  {service.tagline}
                </p>
                <p
                  className={`font-sans text-sm leading-relaxed ${
                    service.highlight ? "text-cream/70" : "text-warm-muted"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <ul
                className="flex flex-col gap-3 mb-8 flex-1"
                role="list"
                aria-label="Inclusions"
              >
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className={`flex-shrink-0 mt-0.5 ${
                        service.highlight ? "text-sandstone" : "text-terracotta"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-sans text-sm ${
                        service.highlight ? "text-cream/80" : "text-charcoal"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`pt-6 border-t ${
                  service.highlight ? "border-white/10" : "border-border"
                }`}
              >
                <div className="flex flex-col gap-1 mb-6">
                  <p
                    className={`font-sans text-sm font-medium ${
                      service.highlight ? "text-cream" : "text-charcoal"
                    }`}
                  >
                    {service.pricing}
                  </p>
                  <p
                    className={`font-sans text-xs ${
                      service.highlight ? "text-cream/50" : "text-warm-muted"
                    }`}
                  >
                    {service.turnaround}
                  </p>
                </div>
                <a
                  href="#contact"
                  className={`inline-flex items-center font-sans text-sm font-medium transition-colors ${
                    service.highlight
                      ? "text-sandstone hover:text-cream underline underline-offset-4"
                      : "text-terracotta hover:text-terracotta-dark underline underline-offset-4"
                  }`}
                >
                  Request this service →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
