import type { Metadata } from "next";

/**
 * Metadata for a page with its own title. A page's `openGraph` and `twitter`
 * replace the site-wide ones instead of merging, so the share image has to be
 * repeated here or link previews lose it.
 */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const images = ["/opengraph-image"];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title, description, url: path, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
