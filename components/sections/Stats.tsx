"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 14, suffix: "+", label: "Years international experience" },
  { prefix: "$", value: 40, suffix: "M+", label: "Largest project delivered" },
  { value: 7, suffix: "", label: "Melbourne-west suburbs served" },
  { value: 72, suffix: "hr", label: "Typical estimate turnaround" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="bg-charcoal py-16 lg:py-20"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-10 px-6 lg:px-10 flex flex-col gap-3 ${
                index < stats.length - 1
                  ? "border-b border-r border-white/10 lg:border-b-0"
                  : "border-b border-white/10 lg:border-b-0"
              } ${index % 2 === 0 && index < stats.length - 1 ? "lg:border-r" : ""}`}
            >
              <div className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-cream tracking-tight leading-none">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="font-sans text-xs lg:text-sm text-white/50 uppercase tracking-widest leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
