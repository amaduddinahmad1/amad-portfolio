import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ProjectGallery from "@/components/ProjectGallery";
import ResultsTable from "@/components/ResultsTable";
import { getProject, profile, projects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

// Only the projects listed in portfolio.ts exist; any other address is a true 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return pageMetadata(
    `${project.shortTitle} | ${profile.name}`,
    project.oneLiner,
    `/projects/${project.slug}`,
  );
}

function CaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const { results } = caseStudy;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 py-1 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4" aria-hidden />
        All projects
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium">
          <span className="rounded-full border border-border px-2.5 py-1 text-muted">{project.tag}</span>
          <span className="text-muted">{project.badge}</span>
        </div>
        <h1 className="mt-4 text-3xl leading-tight font-bold text-balance sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-base text-muted sm:text-lg">{project.oneLiner}</p>
      </header>

      <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-violet/25" />
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          preload
          sizes="(min-width: 896px) 848px, 100vw"
          className="object-contain p-3 sm:p-5"
        />
      </div>

      <CaseSection title="Problem">
        <p className="text-base leading-relaxed text-muted sm:text-lg">{caseStudy.problem}</p>
      </CaseSection>

      <CaseSection title="What I Built">
        <ul className="space-y-3 text-base text-muted">
          {caseStudy.whatIBuilt.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection title="How It Works">
        {caseStudy.howItWorks.intro && <p className="mb-5 text-muted">{caseStudy.howItWorks.intro}</p>}
        <ArchitectureDiagram {...caseStudy.howItWorks} />
      </CaseSection>

      <CaseSection title="Results">
        <div className="space-y-6">
          {results.metrics && (
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {results.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-surface p-5"
                >
                  <dt className="order-2 text-sm text-muted">{metric.label}</dt>
                  <dd className="order-1 font-display text-2xl font-bold text-fg">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {results.table && <ResultsTable table={results.table} />}
          {results.highlights.length > 0 && (
            <ul className="space-y-3 text-base text-muted">
              {results.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {results.insight && (
            <p className="rounded-2xl border border-accent/40 bg-accent/10 p-5 text-fg">{results.insight}</p>
          )}
          {project.gallery.length > 0 && <ProjectGallery images={project.gallery} />}
        </div>
      </CaseSection>

      <CaseSection title="Tech Stack">
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-fg">
              {t}
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection title="What I Learned">
        <p className="text-base leading-relaxed text-muted sm:text-lg">{caseStudy.learned}</p>
      </CaseSection>

      <footer className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.shortTitle} on GitHub`}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub className="size-4" aria-hidden />
            GitHub
          </a>
        ) : (
          project.codeNote && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <Lock className="size-4" aria-hidden />
              {project.codeNote}
            </span>
          )
        )}
        <Link
          href={`/projects/${next.slug}`}
          className="inline-flex items-center gap-2 py-1 text-sm font-semibold text-accent hover:underline"
        >
          Next project: {next.shortTitle}
          <ArrowRight className="size-4 shrink-0" aria-hidden />
        </Link>
      </footer>
    </article>
  );
}
