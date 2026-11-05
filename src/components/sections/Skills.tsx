import type { ComponentType } from "react";
import { BrainCircuit, ChartColumn, Network, Server, Sparkles, Wrench } from "lucide-react";
import {
  SiFastapi,
  SiGit,
  SiGithub,
  SiJupyter,
  SiKeras,
  SiLivekit,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { skillGroups, type SkillGroup } from "@/data/portfolio";
import Reveal from "../Reveal";
import Section from "../Section";

type IconType = ComponentType<{ className?: string }>;

const groupIcons: Record<SkillGroup["icon"], IconType> = {
  genai: Sparkles,
  ml: BrainCircuit,
  dl: Network,
  data: ChartColumn,
  backend: Server,
  tools: Wrench,
};

/** Tech logos by skill name. Skills not listed here show as text only. */
const techLogos: Record<string, IconType> = {
  Python: SiPython,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  "Scikit-learn": SiScikitlearn,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  "Jupyter Notebook": SiJupyter,
  LiveKit: SiLivekit,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Toolkit">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const GroupIcon = groupIcons[group.icon];
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GroupIcon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Logo = techLogos[skill];
                    return (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-2.5 py-1.5 text-sm text-fg"
                      >
                        {Logo && <Logo className="size-3.5 text-muted" aria-hidden />}
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
