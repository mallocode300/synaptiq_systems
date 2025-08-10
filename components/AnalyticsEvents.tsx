"use client";

import { useEffect } from "react";
import { canUseAnalytics, onConsentChange } from "@/lib/analytics";

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handler() {
      if (!canUseAnalytics() || typeof window.plausible !== "function") return;
      // Track CTA and form submissions via delegated listeners
      const onClickCTA = (e: Event) => {
        const el = e.target as HTMLElement | null;
        if (!el) return;
        const link = el.closest('a[data-event="calendly-cta"]');
        if (link) window.plausible?.("CTA Calendly Click");
      };
      const onSubmitForm = (e: Event) => {
        const form = e.target as HTMLFormElement | null;
        if (form?.id === "contact-form") window.plausible?.("Contact Form Submit");
      };
      document.addEventListener("click", onClickCTA);
      document.addEventListener("submit", onSubmitForm);
      return () => {
        document.removeEventListener("click", onClickCTA);
        document.removeEventListener("submit", onSubmitForm);
      };
    }
    const cleanup = handler();
    const off = onConsentChange(() => {
      if (cleanup) cleanup();
      handler();
    });
    return () => {
      if (cleanup) cleanup();
      off();
    };
  }, []);

  return null;
}


