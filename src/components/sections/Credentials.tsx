import { Award, Users } from "lucide-react";
import { certifications, leadership } from "@/data/portfolio";
import Reveal from "../Reveal";
import Section from "../Section";

export default function Credentials() {
  return (
    <Section id="credentials" title="Certifications & Leadership">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Award className="size-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <p className="font-medium text-fg">{cert.title}</p>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="h-full">
          <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Users className="size-5" aria-hidden />
              </span>
              <h3 className="text-lg font-bold">Leadership</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {leadership.map((item) => (
                <li key={item.role}>
                  <p className="font-medium text-fg">{item.role}</p>
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                  <p className="mt-1 text-sm text-muted">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
