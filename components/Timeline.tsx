import React from "react";

type TimelineItem = {
  title: string;
  description?: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-4 md:ml-6">
      {items.map((step, i) => (
        <li key={i} className="pl-6 md:pl-8 pb-6 last:pb-0 relative">
          <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#035096] ring-2 ring-[#035096]/20" />
          {i < items.length - 1 && (
            <span className="absolute left-1.5 top-5 md:left-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-black/10 to-transparent" />
          )}
          <div className="inline-flex items-center gap-2 text-xs text-black/50 mb-1">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-black/60 font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="sr-only">Step {i + 1}</span>
          </div>
          <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
          {step.description && (
            <p className="text-sm md:text-base text-black/70 mt-1">{step.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}


