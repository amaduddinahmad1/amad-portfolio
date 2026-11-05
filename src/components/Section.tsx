import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Shared wrapper so every home-page section has the same spacing and heading style. */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">{eyebrow}</p>
          )}
          <h2 id={`${id}-title`} className="text-3xl font-bold sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
