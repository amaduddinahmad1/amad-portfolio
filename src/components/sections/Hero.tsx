import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import SocialIcons from "../SocialIcons";

export default function Hero() {
  const [before, after] = profile.headline.split(profile.headlineHighlight);

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Background: grid texture and two soft color glows */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-fg sm:text-sm">
            <span className="relative flex size-2.5" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            {profile.badge}
          </p>

          <p className="mt-6 text-sm font-medium text-accent sm:text-base">{profile.eyebrow}</p>

          <h1
            id="hero-title"
            className="mt-3 text-4xl leading-[1.1] font-bold text-balance sm:text-5xl lg:text-6xl"
          >
            {after === undefined ? (
              profile.headline
            ) : (
              <>
                {before}
                <span className="text-gradient">{profile.headlineHighlight}</span>
                {after}
              </>
            )}
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">{profile.subheadline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
          </div>

          <SocialIcons className="mt-8" />
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <aside
      aria-label="Profile summary"
      className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-surface/80 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-7"
    >
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          {/* Small glowing accent behind the photo */}
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent/60 to-violet/60 opacity-70 blur-lg"
          />
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={96}
            height={96}
            preload
            className="relative size-24 rounded-full border-2 border-accent/60 object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-display text-lg leading-tight font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-border border-t border-border text-sm">
        {profile.infoRows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-4 py-3">
            <dt className="shrink-0 text-muted">{row.label}</dt>
            <dd className="text-right font-medium text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
