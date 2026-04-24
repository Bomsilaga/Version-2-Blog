"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.08, rootMargin: "-30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const translateStart =
    direction === "up"
      ? "translate-y-8"
      : direction === "left"
        ? "-translate-x-6"
        : direction === "right"
          ? "translate-x-6"
          : "";

  const AnyTag = Tag as React.ElementType;

  return (
    <AnyTag
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${translateStart}`
      } ${className}`}
    >
      {children}
    </AnyTag>
  );
}

/** Stagger wrapper — children with Reveal inside animate one-by-one */
export function RevealGroup({
  children,
  className = "",
  stagger = 100,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "-30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {visible
        ? children
        : // When not visible, render children hidden for layout stability
          <div className="opacity-0">{children}</div>}
    </div>
  );
}
