import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Link href="/" aria-label={`${profile.name}, home`} className="font-display text-xl font-bold tracking-tight">
            {profile.logo.text}
            <span className="text-accent">{profile.logo.accent}</span>
          </Link>
          <p className="mt-2 text-sm text-muted">{profile.footerLine}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="inline-block py-1 text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialIcons />
      </div>
      <p className="border-t border-border px-4 py-6 text-center text-xs text-muted">
        © 2026 {profile.name}
      </p>
    </footer>
  );
}
