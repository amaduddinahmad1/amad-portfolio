import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  `Projects | ${profile.name}`,
  "AI and machine learning projects by Amad Ud Din Ahmad, with case studies and results.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-bold sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
        Projects I&apos;ve designed, trained and shipped end to end.
      </p>
      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} flip={i % 2 === 1} headingAs="h2" />
        ))}
      </div>
    </div>
  );
}
