"use client";

type Props = {
  label: string;
  className?: string;
};

export default function CookieSettingsButton({ label, className }: Props) {
  function reopenBanner() {
    try {
      document.cookie = `COOKIE_CONSENT=; path=/; max-age=0`;
      window.dispatchEvent(new Event("cookie-consent-change"));
      window.location.hash = "#cookie-settings";
    } catch {}
  }

  return (
    <button type="button" className={className} onClick={reopenBanner}>
      {label}
    </button>
  );
}


