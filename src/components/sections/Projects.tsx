import { projects } from "@/data/portfolio";
import ProjectCard from "../ProjectCard";
import Reveal from "../Reveal";
import Section from "../Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected Work"
      subtitle="Projects I've designed, trained and shipped end to end."
    >
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
