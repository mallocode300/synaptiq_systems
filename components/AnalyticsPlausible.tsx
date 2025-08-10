"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { canUseAnalytics, onConsentChange } from "@/lib/analytics";

export default function AnalyticsPlausible() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(canUseAnalytics());
    return onConsentChange(() => setEnabled(canUseAnalytics()));
  }, []);

  if (!enabled) return null;
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}


