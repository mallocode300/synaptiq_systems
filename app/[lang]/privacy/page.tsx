import { Locale } from "@/i18n/config";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <div className="container py-16 md:py-24">
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {isFr ? "Politique de confidentialité" : "Privacy Policy"}
        </h1>
        <p className="text-sm text-black/60 mt-2">{isFr ? "Dernière mise à jour" : "Last updated"}: 2025-08-10</p>
      </header>

      <article className="max-w-3xl bg-white rounded-2xl border border-black/5 shadow-sm p-6 md:p-8 text-black/80 leading-relaxed space-y-6">
        <p>
          {isFr
            ? "Nous respectons votre vie privée. Cette page décrit comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
            : "We respect your privacy. This page describes how we collect, use, and protect your personal data in accordance with GDPR."}
        </p>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">{isFr ? "Données collectées" : "Data We Collect"}</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isFr ? "Informations fournies via les formulaires (nom, e‑mail, entreprise, message)." : "Information you provide via forms (name, email, company, message)."}</li>
            <li>{isFr ? "Données techniques minimales nécessaires au fonctionnement du site." : "Minimal technical data required for site operation."}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">{isFr ? "Base légale & finalités" : "Legal Basis & Purposes"}</h2>
          <p>
            {isFr
              ? "Nous traitons vos données sur la base du consentement et de l’intérêt légitime, afin de répondre à vos demandes et d’améliorer nos services."
              : "We process your data based on consent and legitimate interest, to respond to your inquiries and improve our services."}
          </p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">{isFr ? "Conservation" : "Retention"}</h2>
          <p>
            {isFr
              ? "Nous conservons les données aussi longtemps que nécessaire pour atteindre les finalités ou pour respecter les obligations légales."
              : "We retain data as long as necessary to fulfill the purposes or comply with legal obligations."}
          </p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">{isFr ? "Vos droits" : "Your Rights"}</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isFr ? "Accès et rectification" : "Access and rectification"}</li>
            <li>{isFr ? "Effacement et limitation" : "Erasure and restriction"}</li>
            <li>{isFr ? "Opposition et portabilité" : "Objection and data portability"}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">Cookies</h2>
          <p>
            {isFr
              ? "Gérez vos préférences via la bannière de consentement. Vous pouvez modifier vos choix à tout moment depuis le lien ‘Paramètres des cookies’ en pied de page."
              : "Manage your preferences via the consent banner. You can change your choices anytime using the ‘Cookie settings’ link in the footer."}
          </p>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-semibold mb-2">{isFr ? "Contact" : "Contact"}</h2>
          <p>
            {isFr
              ? "Pour toute question relative à la protection des données, veuillez nous contacter."
              : "For any data protection questions, please contact us."}
          </p>
        </section>
      </article>
    </div>
  );
}


