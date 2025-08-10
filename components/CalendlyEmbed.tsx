"use client";

import React from "react";

type Props = {
  url?: string;
  height?: number;
};

export default function CalendlyEmbed({ url, height = 700 }: Props) {
  const src = url || process.env.NEXT_PUBLIC_CALENDLY_URL || "";
  if (!src) return null;
  return (
    <div className="w-full rounded-2xl border border-black/10 overflow-hidden">
      <iframe
        title="Schedule with Synaptiq"
        src={src}
        style={{ width: "100%", height }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      />
    </div>
  );
}


