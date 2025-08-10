"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useTransition } from "react";

import type { Route } from "next";
const locales = ["en", "fr"] as const;
type Locale = (typeof locales)[number];

function setLocaleCookie(locale: string) {
  try {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
  } catch {}
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const current: Locale = useMemo(() => {
    const first = (pathname?.split("/")[1] || "") as Locale | "";
    return (locales as readonly string[]).includes(first) ? (first as Locale) : "en";
  }, [pathname]);

  function switchTo(locale: string) {
    if (!pathname) return;
    const parts = pathname.split("/");
    if ((locales as readonly string[]).includes(parts[1] as string)) {
      parts[1] = locale;
    } else {
      parts.splice(1, 0, locale);
    }
    const next = (parts.join("/") || "/") as Route;
    setLocaleCookie(locale);
    startTransition(() => router.push(next));
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        aria-pressed={current === "en"}
        className={`px-2 py-1 rounded-md border ${
          current === "en" ? "border-[#035096] text-[#035096]" : "border-black/10"
        }`}
        onClick={() => switchTo("en")}
        disabled={isPending}
      >
        EN
      </button>
      <button
        aria-pressed={current === "fr"}
        className={`px-2 py-1 rounded-md border ${
          current === "fr" ? "border-[#035096] text-[#035096]" : "border-black/10"
        }`}
        onClick={() => switchTo("fr")}
        disabled={isPending}
      >
        FR
      </button>
    </div>
  );
}


