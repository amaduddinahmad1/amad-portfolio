"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "../Reveal";
import Section from "../Section";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="about" title="About" className="bg-surface/40">
      <div className="grid items-start gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <Reveal className="mx-auto w-full max-w-64 md:mx-0 md:w-64">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 to-violet/40 opacity-60 blur-lg"
            />
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={400}
              height={400}
              sizes="256px"
              className="relative w-full rounded-2xl border border-border object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div id="about-text" className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {expanded ? (
              profile.aboutFull.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>{profile.aboutShort}</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="about-text"
            className="mt-4 inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-accent hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>

          <p className="mt-6 rounded-2xl border border-border bg-surface p-4 text-sm text-fg">
            {profile.availability}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
