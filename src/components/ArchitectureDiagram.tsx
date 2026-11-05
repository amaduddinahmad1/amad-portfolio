import { ArrowDown, ArrowRight, Database } from "lucide-react";
import type { Project } from "@/data/portfolio";

/** Boxes and arrows built from a project's `howItWorks` data. */
export default function ArchitectureDiagram({
  flow,
  storage,
  details,
}: Project["caseStudy"]["howItWorks"]) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <ol className="flex flex-col items-stretch md:flex-row md:flex-wrap md:items-center md:gap-y-3">
        {flow.map((step, i) => (
          // A step can repeat (e.g. MaxPool twice), so the key includes its position.
          <li key={`${i}-${step}`} className="flex flex-col items-center md:flex-row">
            <span className="w-full rounded-xl border border-border-strong bg-surface-2 px-4 py-3 text-center text-sm font-medium text-fg md:w-auto md:max-w-48">
              {step}
            </span>
            {i < flow.length - 1 && (
              <>
                <ArrowDown className="my-1.5 size-4 shrink-0 text-accent md:hidden" aria-hidden />
                <ArrowRight className="mx-2 hidden size-4 shrink-0 text-accent md:block" aria-hidden />
              </>
            )}
          </li>
        ))}
      </ol>

      {storage && (
        <p className="mt-5 flex items-center gap-2 rounded-xl border border-dashed border-border-strong px-4 py-3 text-sm text-muted">
          <Database className="size-4 shrink-0 text-accent" aria-hidden />
          {storage}
        </p>
      )}

      {details && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {details.map((detail) => (
            <li key={detail} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-muted">
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
