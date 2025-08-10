import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { Locale } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { fr } from "@/i18n/dictionaries/fr";

const dictMap = { en, fr } as const;

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = dictMap[lang] || en;
  return (
    <div className="min-h-screen text-black bg-white">
      <Nav />
      <main>
        {/* Hero */}
        <section className="container py-24 md:py-36">
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-black/70 mb-10">{t.hero.subtitle}</p>
              <a
                href="#contact"
                className="inline-block rounded-full bg-[#035096] text-white px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base hover:opacity-90 transition"
              >
                {t.hero.cta}
              </a>
              {process.env.NEXT_PUBLIC_CALENDLY_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-event="calendly-cta"
                  className="inline-block ml-3 rounded-full border border-black/10 text-black px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base hover:bg-black/[.03] transition"
                >
                  {t.hero.calendly}
                </a>
              )}
            </div>
          </Reveal>
        </section>

        {/* About */}
        <section id="about" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.about.title}</h2>
            <p className="max-w-3xl text-black/70 text-base md:text-lg">{t.about.text}</p>
          </Reveal>
        </section>

        {/* Services */}
        <section id="services" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t.services.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.services.items.map((s, i) => (
                <a href={`/${lang}/services/${s.slug}`} key={i} className="p-6 rounded-2xl border border-black/5 block hover:border-[#035096]/30">
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-black/70 mb-3">{s.desc}</p>
                  <ul className="list-disc list-inside text-black/70 space-y-1">
                    {s.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Approach */}
        <section id="approach" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-10">{t.approach.title}</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-6 rounded-2xl border border-black/5">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{t.approach.strategyTitle}</h3>
                <p className="text-black/70">{t.approach.strategyText}</p>
              </div>
              <div className="p-6 rounded-2xl border border-black/5">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{t.approach.techTitle}</h3>
                <p className="text-black/70">{t.approach.techText}</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Process */}
        <section id="process" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t.process.title}</h2>
            <ol className="grid md:grid-cols-4 gap-6">
              {t.process.steps.map((title, i) => (
                <li key={i} className="p-6 rounded-2xl border border-black/5">
                  <div className="text-sm text-black/50 mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  {t.process.stepDescs && (
                    <p className="text-black/70">{t.process.stepDescs[i]}</p>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Expertise */}
        <section id="expertise" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t.expertise.title}</h2>
            <p className="max-w-3xl text-black/70 mb-8">{t.expertise.text}</p>
            <div className="flex flex-wrap items-center gap-10 md:gap-14 opacity-90">
              <Image src="/logos/zapier.svg" alt="Zapier" width={90} height={26} />
              <Image src="/logos/make.svg" alt="Make" width={70} height={26} />
              <Image src="/logos/n8n.svg" alt="n8n" width={70} height={26} />
              <Image src="/logos/retool.svg" alt="Retool" width={90} height={26} />
            </div>
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{lang === 'fr' ? 'Témoignages' : 'Testimonials'}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <blockquote key={i} className="p-6 rounded-2xl border border-black/5 text-black/80">
                  <p>“{lang === 'fr' ? 'Une exécution rapide et des résultats mesurables.' : 'Swift execution with measurable results.'}”</p>
                  <footer className="mt-3 text-sm text-black/60">{lang === 'fr' ? 'Directeur des opérations' : 'Operations Director'}</footer>
                </blockquote>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Industries */}
        <section className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{lang === 'fr' ? 'Secteurs' : 'Industries'}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { t: lang === 'fr' ? 'Finance' : 'Finance' },
                { t: lang === 'fr' ? 'E‑commerce' : 'E‑commerce' },
                { t: lang === 'fr' ? 'Santé' : 'Healthcare' },
                { t: lang === 'fr' ? 'PME' : 'SMB' },
              ].map((x, i) => (
                <div key={i} className="p-6 rounded-2xl border border-black/5">
                  <h3 className="font-semibold mb-2">{x.t}</h3>
                  <p className="text-black/70 text-sm">{lang === 'fr' ? 'Exemples d’impact: coûts ↓, productivité ↑.' : 'Example impact: lower costs, higher productivity.'}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Case studies */}
        <section id="case-studies" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t.cases.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.cases.items.map((c, i) => (
                <article key={i} className="p-6 rounded-2xl border border-black/5">
                  <div className="text-sm text-black/50 mb-1">{c.company}</div>
                  <h3 className="text-lg font-semibold mb-2">{c.result}</h3>
                  <p className="text-black/70">{c.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t.faq.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: lang === "fr" ? "Comment démarrent les missions ?" : "How do engagements start?",
                  a:
                    lang === "fr"
                      ? "Généralement par un atelier de découverte menant à une feuille de route priorisée."
                      : "Typically with a discovery workshop leading to a prioritized roadmap.",
                },
                {
                  q: lang === "fr" ? "Quels outils utilisez‑vous ?" : "What tools do you use?",
                  a:
                    lang === "fr"
                      ? "Nous sélectionnons n8n, Zapier, Retool, des modèles LLM et des apps sur mesure."
                      : "We curate solutions including n8n, Zapier, Retool, LLMs, and custom apps.",
                },
                {
                  q: lang === "fr" ? "Comment gérez‑vous la sécurité ?" : "How do you handle security?",
                  a:
                    lang === "fr"
                      ? "Principe du moindre privilège, journaux d’audit, et isolation des environnements."
                      : "Principles of least privilege, audit trails, and environment isolation.",
                },
                {
                  q: lang === "fr" ? "Proposez‑vous des formations ?" : "Do you offer training?",
                  a:
                    lang === "fr"
                      ? "Oui — playbooks, ateliers et accompagnement des équipes internes."
                      : "Yes—playbooks, workshops, and enablement for internal teams.",
                },
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-black/5">
                  <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="text-black/70">{f.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="container py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">{t.contact.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <ContactForm />
              <div>
                <h3 className="text-lg font-semibold mb-3">{lang === 'fr' ? 'Réserver un créneau' : 'Book a time'}</h3>
                <CalendlyEmbed />
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-black text-white py-10 mt-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm opacity-90">
            <span className="font-semibold">Synaptiq</span> · synaptiq.systems · © 2025
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://www.linkedin.com/company/synaptiq-ai"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href={`/${lang}/privacy`} className="hover:underline">
              {lang === "fr" ? "Confidentialité" : "Privacy"}
            </a>
            <a href={`/${lang}/terms`} className="hover:underline">
              {lang === "fr" ? "Conditions" : "Terms"}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


