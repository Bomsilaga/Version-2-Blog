"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Wrench } from "lucide-react";

const credentials = [
  {
    icon: Award,
    label: "Chartered Engineer",
    detail: "MIEAust (Engineers Australia) · MNSE (Nigerian Society of Engineers)",
  },
  {
    icon: GraduationCap,
    label: "Master of Construction Management",
    detail: "Deakin University — currently enrolled",
  },
  {
    icon: Wrench,
    label: "Tool Proficiency",
    detail: "CostX · Bluebeam · Procore · BIM platforms",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 px-6 lg:px-8"
      aria-label="About OnGroundPM"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="aspect-[4/5] bg-cream-dark border-2 border-dashed border-sandstone/40 rounded-sm flex flex-col items-center justify-center gap-4 text-center p-8"
              role="img"
              aria-label="Founder photo placeholder — to be replaced"
            >
              <div className="w-16 h-16 rounded-full bg-sandstone/20 flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-sandstone"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <p className="font-sans text-xs text-warm-muted/60 uppercase tracking-widest">
                [Photo Placeholder]
              </p>
              <p className="font-sans text-xs text-warm-muted/40">
                Replace with founder photo
              </p>
            </div>

            {/* Decorative stat callout */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-terracotta p-6 rounded-sm">
              <p className="font-serif text-3xl font-bold text-cream">$40M+</p>
              <p className="font-sans text-xs text-cream/70 mt-1 uppercase tracking-wider">
                Largest project
                <br />
                delivered
              </p>
            </div>
          </motion.div>

          {/* Right — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-6">
              About
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-8 text-balance">
              A civil engineer who&rsquo;s been on the tools and in the office.
            </h2>

            <div className="space-y-5 font-sans text-base text-warm-muted leading-relaxed mb-10">
              <p>
                OnGroundPM was built from 14 years of international experience
                delivering civil and commercial construction — including a $40M+
                commercial project in Victoria. That experience spans full
                project lifecycles: design, procurement, construction, and
                handover.
              </p>
              <p>
                The gap I kept seeing was this: small builders and
                owner-builders were carrying real project risk without the
                cost-management and programme discipline that larger firms
                apply as standard. One bad estimate or one uncontrolled
                variation can wipe a project&rsquo;s profit.
              </p>
              <p>
                OnGroundPM exists to fix that — delivering the rigour of a
                professional PM function at a scale and price that works for
                smaller projects and sole traders.
              </p>
            </div>

            {/* Credentials list */}
            <div className="space-y-4 pt-8 border-t border-border">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div key={cred.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-sm bg-cream-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={15}
                        className="text-terracotta"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-charcoal">
                        {cred.label}
                      </p>
                      <p className="font-sans text-xs text-warm-muted mt-0.5">
                        {cred.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-sans text-xs text-warm-muted">
                <span className="font-medium text-charcoal">Jokjeth Services Pty Ltd</span>{" "}
                trading as OnGroundPM · ABN 47 828 511 857
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
