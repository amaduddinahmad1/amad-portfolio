"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { stats, type Stat } from "@/data/portfolio";

function format(n: number, decimals = 0) {
  return n.toFixed(decimals);
}

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  // Start at the real value so the number is correct even before JavaScript runs.
  const [display, setDisplay] = useState(format(stat.value, stat.decimals));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, stat.value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(format(v, stat.decimals)),
    });
    return () => controls.stop();
  }, [inView, reduce, stat.value, stat.decimals]);

  return (
    <span ref={ref} aria-hidden className="tabular-nums">
      {display}
      {stat.suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-border bg-surface/50">
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2 text-center md:text-left">
            <dt className="order-2 text-sm text-muted">{stat.label}</dt>
            <dd className="order-1 font-display text-3xl font-bold text-fg sm:text-4xl">
              <span className="sr-only">
                {format(stat.value, stat.decimals)}
                {stat.suffix}
              </span>
              <CountUp stat={stat} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
