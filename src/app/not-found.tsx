import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Page not found | ${profile.name}`,
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="text-gradient font-display text-7xl font-bold sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            View projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
