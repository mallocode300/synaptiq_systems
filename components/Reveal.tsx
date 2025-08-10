"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealProps = PropsWithChildren<{
  delayMs?: number;
  y?: number;
}>;

export default function Reveal({ children, delayMs = 0, y = 8 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => setVisible(true), delayMs);
            observer.unobserve(entry.target);
            return () => clearTimeout(timer);
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 will-change-transform motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${y}px]`
      }`}
      style={{ transform: visible ? undefined : `translateY(${y}px)` }}
    >
      {children}
    </div>
  );
}


