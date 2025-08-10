import React from "react";

type Lang = "en" | "fr";

type Testimonial = {
  name: string;
  title: string;
  company: string;
  location: string;
  quote: string;
};

function getTestimonials(lang: Lang): Testimonial[] {
  if (lang === "fr") {
    return [
      {
        name: "Aïcha Benali",
        title: "Directrice des opérations",
        company: "FinServe",
        location: "Paris, FR",
        quote:
          "Une équipe méticuleuse qui a livré des automatisations fiables en quelques semaines. Impact immédiat sur nos coûts et nos délais.",
      },
      {
        name: "Lucas Martín",
        title: "Responsable e‑commerce",
        company: "Casa Verde",
        location: "Madrid, ES",
        quote:
          "Des intégrations IA pragmatiques et bien encadrées. Nous avons vu la conversion progresser et la maintenance baisser.",
      },
      {
        name: "Maya Singh",
        title: "Fondatrice",
        company: "CareBridge",
        location: "Lyon, FR",
        quote:
          "Synaptiq nous a aidés à passer d’un prototype à un flux n8n robuste avec validation humaine et traçabilité complète.",
      },
    ];
  }
  return [
    {
      name: "Aisha Benali",
      title: "Operations Director",
      company: "FinServe",
      location: "Paris, FR",
      quote:
        "Meticulous team delivering reliable automations in weeks. Immediate impact on costs and turnaround times.",
    },
    {
      name: "Lucas Martin",
      title: "Head of E‑commerce",
      company: "Casa Verde",
      location: "Madrid, ES",
      quote:
        "Pragmatic, well‑guarded AI integrations. We saw conversion lift and maintenance drop.",
    },
    {
      name: "Maya Singh",
      title: "Founder",
      company: "CareBridge",
      location: "Lyon, FR",
      quote:
        "Synaptiq helped us move from prototype to a robust n8n workflow with human‑in‑the‑loop and full audit trail.",
    },
  ];
}

export default function Testimonials({ lang }: { lang: Lang }) {
  const items = getTestimonials(lang);
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        {lang === "fr" ? "Témoignages" : "Testimonials"}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure
            key={i}
            className="p-6 rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-[#035096]/10 text-[#035096] flex items-center justify-center font-semibold">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <figcaption className="font-medium leading-tight">
                  {t.name}
                </figcaption>
                <div className="text-xs text-black/60">
                  {t.title} · {t.company} · {t.location}
                </div>
              </div>
            </div>
            <blockquote className="text-black/80">
              <span className="mr-1 opacity-50">“</span>
              {t.quote}
              <span className="ml-1 opacity-50">”</span>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}


