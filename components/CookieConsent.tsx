"use client";

import { useEffect, useMemo, useState } from "react";
import { COOKIE_CONSENT_NAME, defaultConsent, type ConsentPreferences, serializeConsent } from "@/lib/consent";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days = 180) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax; expires=${expires}`;
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>(defaultConsent);

  useEffect(() => {
    const existing = getCookie(COOKIE_CONSENT_NAME);
    if (!existing) {
      setOpen(true);
    } else {
      try {
        const parsed = JSON.parse(existing);
        setPrefs({ necessary: true, analytics: !!parsed.analytics, marketing: !!parsed.marketing });
      } catch {
        setOpen(true);
      }
    }
  }, []);

  function acceptAll() {
    const next: ConsentPreferences = { necessary: true, analytics: true, marketing: true };
    setCookie(COOKIE_CONSENT_NAME, serializeConsent(next));
    setPrefs(next);
    setOpen(false);
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  function rejectAll() {
    const next: ConsentPreferences = { necessary: true, analytics: false, marketing: false };
    setCookie(COOKIE_CONSENT_NAME, serializeConsent(next));
    setPrefs(next);
    setOpen(false);
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  function save() {
    setCookie(COOKIE_CONSENT_NAME, serializeConsent(prefs));
    setOpen(false);
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="container">
        <div className="mb-4 rounded-2xl border border-black/10 bg-white shadow-lg p-6">
          <h2 className="text-base font-semibold mb-2">Cookies</h2>
          <p className="text-sm text-black/70 mb-4">
            We use necessary cookies to make our site work. With your consent, we also use analytics and marketing cookies to
            understand usage and improve our services. You can change your preferences at any time.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <fieldset className="p-3 rounded-lg border border-black/10">
              <legend className="text-sm font-medium">Necessary</legend>
              <p className="text-xs text-black/60">Required for basic site functionality. Always on.</p>
              <label className="mt-2 inline-flex items-center gap-2 text-sm">
                <input type="checkbox" checked disabled />
                Enabled
              </label>
            </fieldset>
            <fieldset className="p-3 rounded-lg border border-black/10">
              <legend className="text-sm font-medium">Analytics</legend>
              <p className="text-xs text-black/60">Helps us understand how the site is used.</p>
              <label className="mt-2 inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                />
                Allow analytics
              </label>
            </fieldset>
            <fieldset className="p-3 rounded-lg border border-black/10">
              <legend className="text-sm font-medium">Marketing</legend>
              <p className="text-xs text-black/60">Used to deliver and measure ads.</p>
              <label className="mt-2 inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                />
                Allow marketing
              </label>
            </fieldset>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={rejectAll}
              className="px-4 py-2 rounded-md border border-black/10 text-sm hover:bg-black/[.03]"
            >
              Reject all
            </button>
            <button onClick={save} className="px-4 py-2 rounded-md border border-black/10 text-sm hover:bg-black/[.03]">
              Save preferences
            </button>
            <button onClick={acceptAll} className="px-4 py-2 rounded-md bg-[#035096] text-white text-sm">
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


