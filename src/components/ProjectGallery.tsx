import Image from "next/image";
import type { ProjectImage } from "@/data/portfolio";

/** Image grid for a case study. Each image opens full size in a new tab, so plots stay readable. */
export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {images.map((image) => (
        <figure key={image.src} className="min-w-0">
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open full size: ${image.alt}`}
            className="block overflow-hidden rounded-2xl border border-border bg-surface-2 transition-colors hover:border-accent"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 440px, 100vw"
                className="object-contain p-2"
              />
            </div>
          </a>
          {image.caption && (
            <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
