"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades and slides its children in once, when they scroll into view.
 * Visitors who turn off animations in their system settings see it appear instantly.
 * Use below the fold only; above-the-fold content should be visible at once.
 *
 * Always render the same element: the server can't know the visitor's setting,
 * so rendering something different for them breaks hydration and leaves the
 * content stuck invisible. `data-reveal` is the no-JavaScript fallback in layout.tsx.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
