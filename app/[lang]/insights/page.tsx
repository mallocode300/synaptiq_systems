import { Locale } from "@/i18n/config";
import { parseMediumRSS } from "@/lib/medium";

async function fetchMedium(): Promise<ReturnType<typeof parseMediumRSS>> {
  const url = "https://medium.com/feed/@mallocode300";
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const xml = await res.text();
  return parseMediumRSS(xml, 3);
}

export default async function InsightsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const posts = await fetchMedium();
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">{lang === 'fr' ? 'Analyses' : 'Insights'}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noreferrer" className="p-6 rounded-2xl border border-black/5 hover:border-[#035096]/30 block">
            <h2 className="font-semibold mb-2">{p.title}</h2>
            {p.pubDate && (
              <div className="text-xs text-black/60">{new Date(p.pubDate).toLocaleDateString(lang)}</div>
            )}
            <div className="mt-3 text-sm text-[#035096]">{lang === 'fr' ? 'Lire sur Medium' : 'Read on Medium'} →</div>
          </a>
        ))}
      </div>
    </div>
  );
}


