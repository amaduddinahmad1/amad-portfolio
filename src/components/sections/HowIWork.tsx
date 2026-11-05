import { howIWork } from "@/data/portfolio";
import Reveal from "../Reveal";
import Section from "../Section";

export default function HowIWork() {
  return (
    <Section id="how-i-work" title="How I Work" className="bg-surface/40">
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {howIWork.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <p className="font-display text-3xl font-bold text-accent" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
