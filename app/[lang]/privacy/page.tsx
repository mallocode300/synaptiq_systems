import { Locale } from "@/i18n/config";

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        {isFr ? "Politique de confidentialité" : "Privacy Policy"}
      </h1>
      <div className="prose max-w-none text-black/80">
        <p className="text-sm text-black/60">{isFr ? "Dernière mise à jour" : "Last updated"}: 2025-08-10</p>
        <p>
          {isFr
            ? "Nous respectons votre vie privée. Cette page décrit comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
            : "We respect your privacy. This page describes how we collect, use, and protect your personal data in accordance with GDPR."}
        </p>
        <h2>{isFr ? "Données collectées" : "Data We Collect"}</h2>
        <p>
          {isFr
            ? "Données fournies via les formulaires (nom, e‑mail, entreprise, message) et données techniques minimales nécessaires au fonctionnement du site."
            : "Data provided via forms (name, email, company, message) and minimal technical data necessary for site operation."}
        </p>
        <h2>{isFr ? "Base légale & finalités" : "Legal Basis & Purposes"}</h2>
        <p>
          {isFr
            ? "Nous traitons vos données sur la base du consentement et de l’intérêt légitime, afin de répondre à vos demandes et d’améliorer nos services."
            : "We process your data based on consent and legitimate interest, to respond to your inquiries and improve our services."}
        </p>
        <h2>{isFr ? "Conservation" : "Retention"}</h2>
        <p>
          {isFr
            ? "Nous conservons les données aussi longtemps que nécessaire pour atteindre les finalités ou pour respecter les obligations légales."
            : "We retain data as long as necessary to fulfill the purposes or comply with legal obligations."}
        </p>
        <h2>{isFr ? "Vos droits" : "Your Rights"}</h2>
        <p>
          {isFr
            ? "Vous disposez de droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité. Contactez‑nous pour exercer vos droits."
            : "You have rights to access, rectify, erase, restrict, object, and data portability. Contact us to exercise your rights."}
        </p>
        <h2>{isFr ? "Cookies" : "Cookies"}</h2>
        <p>
          {isFr
            ? "Voir la bannière de consentement pour la gestion des cookies nécessaires, analytiques et marketing."
            : "See the consent banner for managing necessary, analytics, and marketing cookies."}
        </p>
        <p>
          {isFr
            ? "Vous pouvez modifier vos préférences à tout moment via le lien ‘Paramètres des cookies’ en pied de page."
            : "You can change your preferences anytime using the ‘Cookie settings’ link in the footer."}
        </p>
        <h2>{isFr ? "Contact" : "Contact"}</h2>
        <p>
          {isFr
            ? "Pour toute question relative à la protection des données, veuillez nous contacter."
            : "For any data protection questions, please contact us."}
        </p>
      </div>
    </div>
  );
}


