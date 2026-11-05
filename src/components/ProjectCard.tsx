import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/portfolio";

/**
 * Large project card: cover on one side, text on the other.
 * `flip` puts the cover on the right (used to alternate cards).
 * `headingAs` keeps the heading order correct on each page.
 */
export default function ProjectCard({
  project,
  flip = false,
  headingAs: Heading = "h3",
}: {
  project: Project;
  flip?: boolean;
  headingAs?: "h2" | "h3";
}) {
  return (
    <article className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,translate] duration-300 hover:-translate-y-1 hover:border-border-strong lg:grid-cols-2">
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <ProjectCover project={project} />
      </div>

      <div className="flex min-w-0 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium">
          <span className="font-display text-base text-accent">{project.number}</span>
          <span className="rounded-full border border-border px-2.5 py-1 text-muted">{project.tag}</span>
          <span className="text-muted">{project.badge}</span>
        </div>

        <Heading className="mt-4 text-xl leading-snug font-bold sm:text-2xl">{project.title}</Heading>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>

        <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          {project.keyResult}
        </p>

        <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Case study: ${project.shortTitle}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            Case Study
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.shortTitle} on GitHub`}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub className="size-4" aria-hidden />
              GitHub
            </a>
          ) : (
            project.codeNote && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <Lock className="size-3.5" aria-hidden />
                {project.codeNote}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Stacked cards use a fixed 16:10 shape. Side-by-side cards drop the fixed shape
 * and fill their column: a fixed shape plus a stretched height would make the
 * height decide the width, pushing the cover over the text column.
 * `object-contain` never crops, so a cover of any shape fits.
 */
function ProjectCover({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2 lg:aspect-auto lg:h-full">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-violet/25" />
      <div aria-hidden className="bg-grid absolute inset-0" />
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes="(min-width: 1152px) 552px, (min-width: 1024px) 50vw, 100vw"
        className="object-contain p-3 sm:p-5"
      />
    </div>
  );
}
