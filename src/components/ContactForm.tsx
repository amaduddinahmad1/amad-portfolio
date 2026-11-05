"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, Send, X } from "lucide-react";
import { contact, profile } from "@/data/portfolio";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type Toast = { kind: "success" | "error"; text: string };

const fieldClass =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-base text-fg transition-colors placeholder:text-muted focus:border-accent";

/** Opens the visitor's email app with the message filled in. Used when no Web3Forms key is set. */
function openMailApp(name: string, email: string, subject: string, message: string) {
  const body = `${message}\n\nFrom: ${name} (${email})`;
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio: ${subject}`,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  // Hide the toast by itself after a few seconds.
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 7000);
    return () => clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const subject = String(data.get("subject"));

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      openMailApp(name, email, subject, message);
      setToast({ kind: "success", text: "Your email app should open with the message ready to send." });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio: ${subject}`,
          from_name: name,
          name,
          email,
          message,
          botcheck: data.get("botcheck") ? "on" : "",
        }),
      });
      const result: { success?: boolean } = await res.json();
      if (!res.ok || !result.success) throw new Error("Web3Forms rejected the message");

      form.reset();
      setMessage("");
      setToast({ kind: "success", text: "Message sent. I'll reply within 24 hours." });
    } catch {
      setToast({
        kind: "error",
        text: `Sorry, the message didn't send. Please email me at ${profile.email}.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
      >
        {/* Hidden from people; bots that fill it in get filtered out by Web3Forms. */}
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" hidden />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <select id="contact-subject" name="subject" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose a subject
            </option>
            {contact.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <label htmlFor="contact-message" className="block text-sm font-medium">
              Message
            </label>
            <span id="contact-message-count" className="text-xs text-muted tabular-nums">
              {message.length}/{contact.messageMaxLength}
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={contact.messageMaxLength}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-describedby="contact-message-count"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
        >
          <Send className="size-4" aria-hidden />
          {sending ? "Sending..." : "Send"}
        </button>
      </form>

      <div aria-live="polite" className="fixed right-4 bottom-4 left-4 z-50 sm:left-auto sm:max-w-sm">
        {toast && (
          <div
            role={toast.kind === "error" ? "alert" : "status"}
            className="flex items-start gap-3 rounded-xl border border-border-strong bg-surface p-4 text-sm text-fg shadow-2xl shadow-black/30"
          >
            {toast.kind === "success" ? (
              <CircleCheck className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden />
            ) : (
              <CircleAlert className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden />
            )}
            <p className="flex-1 break-words">{toast.text}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Dismiss message"
              className="shrink-0 text-muted hover:text-fg"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
