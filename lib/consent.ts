export const COOKIE_CONSENT_NAME = "COOKIE_CONSENT";

export type ConsentPreferences = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
};

export const defaultConsent: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function serializeConsent(consent: ConsentPreferences): string {
  try {
    return JSON.stringify(consent);
  } catch {
    return JSON.stringify(defaultConsent);
  }
}

export function parseConsentCookie(value: string | undefined | null): ConsentPreferences {
  if (!value) return defaultConsent;
  try {
    const parsed = JSON.parse(value);
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    } satisfies ConsentPreferences;
  } catch {
    return defaultConsent;
  }
}


