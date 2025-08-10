import { COOKIE_CONSENT_NAME, parseConsentCookie } from "./consent";

export function canUseAnalytics(): boolean {
  if (typeof document === "undefined") return false;
  const cookie = document.cookie
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith(COOKIE_CONSENT_NAME + "="))
    ?.split("=")[1];
  const consent = parseConsentCookie(cookie ? decodeURIComponent(cookie) : null);
  return !!consent.analytics;
}

export function onConsentChange(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => callback();
  window.addEventListener("cookie-consent-change", handler);
  return () => window.removeEventListener("cookie-consent-change", handler);
}


