import { Download } from "lucide-react";
import { contact, profile, socials } from "@/data/portfolio";
import ContactForm from "../ContactForm";
import Reveal from "../Reveal";
import Section from "../Section";
import { socialIcons } from "../SocialIcons";

const buttonClass =
  "inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 font-medium transition-colors hover:border-accent hover:text-accent";

// Contact methods shown as buttons, in this order. WhatsApp stays a link: never print the number.
const methods = (["email", "whatsapp", "linkedin"] as const).flatMap((key) =>
  socials.filter((s) => s.key === key),
);

export default function Contact() {
  return (
    <Section id="contact" title={contact.heading} subtitle={contact.sub}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <Reveal>
          <div className="flex flex-col gap-3">
            {methods.map(({ key, label, href }) => {
              const Icon = socialIcons[key];
              const external = href.startsWith("http");
              return (
                <a
                  key={key}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={buttonClass}
                >
                  <Icon className="size-5 shrink-0" aria-hidden />
                  {label}
                </a>
              );
            })}
            <a href={profile.cv} download className={buttonClass}>
              <Download className="size-5 shrink-0" aria-hidden />
              Download CV
            </a>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">{profile.availability}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
