"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "process", label: "Process" },
  { id: "expertise", label: "Expertise" },
  { id: "case-studies", label: "Case Studies" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const observer = useMemo(() => {
    if (typeof window === "undefined") return null;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -65% 0px", // trigger earlier for better UX
      threshold: 0,
    };
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) setActive(id);
        }
      });
    }, options);
  }, []);

  useEffect(() => {
    if (!observer) return;
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [observer]);

  useEffect(() => {
    // Close mobile menu on route hash change/scroll
    const handler = () => setMobileOpen(false);
    window.addEventListener("hashchange", handler);
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("hashchange", handler);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3 select-none">
          <Image
            src="/brand/synaptiq-logo.png"
            alt="Synaptiq logo"
            width={120}
            height={28}
            className="h-7 w-auto object-contain"
            priority
          />
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors hover:text-[#035096] ${
                active === item.id ? "text-[#035096]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-black/10"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative w-4 h-3">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-black transition-transform ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-4 bg-black transition-opacity ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-4 bg-black transition-transform ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="container py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-3 text-sm transition-colors hover:text-[#035096] ${
                  active === item.id ? "text-[#035096]" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


