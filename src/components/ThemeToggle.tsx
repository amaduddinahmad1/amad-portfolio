"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

function currentTheme(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  // In development React can reset <html> attributes on remount; re-apply
  // the saved theme. This is a no-op in production.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") {
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {}
  }, []);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  // Both icons are rendered; CSS shows the right one, so the server and
  // browser always agree (no hydration mismatch).
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <Sun className="theme-icon-sun size-[18px]" aria-hidden />
      <Moon className="theme-icon-moon size-[18px]" aria-hidden />
    </button>
  );
}
