import { Locale } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { fr } from "@/i18n/dictionaries/fr";
import Timeline from "@/components/Timeline";

const dictMap = { en, fr } as const;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const t = dictMap[lang] || en;
  const item = t.services.items.find((i) => i.slug === slug) || t.services.items[0];

  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">{item.title}</h1>
      <p className="text-black/70 mb-8 max-w-3xl">{item.desc}</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-2xl border border-black/5 md:col-span-2">
          <h2 className="text-lg font-semibold mb-3">{lang === "fr" ? "Livrables" : "Deliverables"}</h2>
          <ul className="list-disc list-inside text-black/70 space-y-1">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-black/5">
          <h2 className="text-lg font-semibold mb-3">{lang === "fr" ? "Timeline" : "Timeline"}</h2>
          <Timeline
            items={[
              { title: lang === "fr" ? "Semaine 1 — Découverte" : "Week 1 — Discovery" },
              { title: lang === "fr" ? "Semaine 2 — Design" : "Week 2 — Design" },
              { title: lang === "fr" ? "Semaine 3 — Déploiement" : "Week 3 — Deploy" },
              { title: lang === "fr" ? "Semaine 4 — Élévation" : "Week 4 — Elevate" },
            ]}
          />
        </div>
      </div>

      <a
        href={process.env.NEXT_PUBLIC_CALENDLY_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-[#035096] text-white px-6 py-3 hover:opacity-90"
      >
        {lang === "fr" ? "Planifier une consultation" : "Schedule a Consultation"}
      </a>
    </div>
  );
}


