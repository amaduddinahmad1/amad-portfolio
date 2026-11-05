import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { socials, type SocialKey } from "@/data/portfolio";

export const socialIcons: Record<SocialKey, ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: Mail,
  whatsapp: FaWhatsapp,
};

/** Round icon buttons for GitHub, LinkedIn, Email and WhatsApp. */
export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ key, label, href }) => {
        const Icon = socialIcons[key];
        const external = href.startsWith("http");
        return (
          <li key={key}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="size-[18px]" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
