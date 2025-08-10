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
          <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#035096]" />
          {i < items.length - 1 && (
            <span className="absolute left-1.5 top-5 md:left-2 h-[calc(100%-1rem)] w-px bg-black/10" />
          )}
          <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
          {step.description && (
            <p className="text-sm md:text-base text-black/70 mt-1">{step.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
}


