import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "../Reveal";
import Section from "../Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education" className="bg-surface/40">
      <ol className="relative ml-4 border-l border-border sm:ml-5">
        {experience.map((item, i) => {
          const Icon = item.kind === "work" ? Briefcase : GraduationCap;
          return (
            <li key={`${item.org}-${item.period}`} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden
                className="absolute top-0 -left-4 flex size-8 items-center justify-center rounded-full border border-border-strong bg-bg text-accent sm:-left-5 sm:size-10"
              >
                <Icon className="size-4" />
              </span>

              <Reveal delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="text-lg font-bold">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-fg">
                        {item.org}
                        {item.location && <span className="text-muted"> · {item.location}</span>}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.status && (
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                          {item.status}
                        </span>
                      )}
                      <span className="text-sm text-muted">{item.period}</span>
                    </div>
                  </div>

                  {item.points && (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
