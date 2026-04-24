"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can I get an estimate?",
    a: "Our standard turnaround for a Quick Estimate is 72 hours from receipt of complete drawings and project information. For larger or more complex projects, we'll give you a specific timeline when we scope the work. We won't quote a turnaround we can't keep.",
  },
  {
    q: "What do you charge?",
    a: "Every engagement is scoped and priced upfront in writing. Quick Estimates are a fixed fee based on project complexity — you'll know the cost before we start. Project Oversight is a monthly retainer agreed at scope. Full PM Partnership is a percentage of project value. We don't charge by the hour.",
  },
  {
    q: "Do you visit the site?",
    a: "For estimates, most of our work is done from drawings and specifications — we don't need to be on-site to produce an accurate estimate. For Project Oversight and Full PM Partnership engagements, site visits are included and are part of how we keep your project on track.",
  },
  {
    q: "What software do you use?",
    a: "Our core tools are CostX (for estimating), Bluebeam (for document markup and review), Procore (for project management), and BIM platforms for model-based takeoffs. We can work with most drawing formats — PDF, DWG, RVT, and more.",
  },
  {
    q: "Can you review a contract before I sign it?",
    a: "Yes. Contract review is something we do regularly for small builders and owner-builders who want a second set of eyes before committing. We'll flag risks, ambiguous scope items, and cost exposure. This is available as a standalone service — get in touch to discuss.",
  },
  {
    q: "Do you work outside Melbourne's west?",
    a: "Our primary focus is Melbourne's western suburbs — Wyndham Vale, Tarneit, Point Cook, Werribee, Truganina, Hoppers Crossing, and Melton. We know these markets well. If your project is elsewhere in metropolitan Melbourne, reach out — we'll let you know if we can help.",
  },
  {
    q: "What's your turnaround time for ongoing work?",
    a: "For Project Oversight and Full PM Partnership clients, monthly cost reports are delivered within 5 business days of the month end. Variation assessments and ad hoc queries are typically turned around within 48 hours. We set clear timelines for every deliverable at the start of engagement.",
  },
  {
    q: "How do I send you drawings?",
    a: "Email us directly at info@ongroundpm.com.au or use the contact form below. For large files (over 25MB), we can share a secure upload link. We accept PDF, DWG, RVT, and most common drawing formats. We'll acknowledge receipt within one business day.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-cream-dark"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-6 text-balance">
              Common questions.
            </h2>
            <p className="font-sans text-base text-warm-muted leading-relaxed mb-8">
              Can&rsquo;t find what you&rsquo;re looking for? Just ask.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center font-sans text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors underline underline-offset-4"
            >
              Ask us directly →
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Accordion multiple={false} className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index}
                  className="border-border"
                >
                  <AccordionTrigger className="font-sans text-base font-medium text-charcoal text-left hover:text-terracotta py-5 aria-expanded:text-terracotta">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm text-warm-muted leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
