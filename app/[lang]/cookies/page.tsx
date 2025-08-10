import { Locale } from "@/i18n/config";

export default async function CookiesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        {isFr ? "Politique de cookies" : "Cookie Policy"}
      </h1>
      <div className="prose max-w-none text-black/80">
        <p className="text-sm text-black/60">{isFr ? "Dernière mise à jour" : "Last updated"}: 2025-08-10</p>
        <p>
          {isFr
            ? "Cette page explique comment nous utilisons les cookies et technologies similaires, ainsi que vos choix pour les contrôler."
            : "This page explains how we use cookies and similar technologies and your choices to control them."}
        </p>
        <h2>{isFr ? "Types de cookies" : "Types of Cookies"}</h2>
        <ul>
          <li>
            <strong>{isFr ? "Nécessaires" : "Necessary"}</strong> — {isFr ? "indispensables au fonctionnement du site." : "required for the basic operation of the site."}
          </li>
          <li>
            <strong>{isFr ? "Analytiques" : "Analytics"}</strong> — {isFr ? "aident à comprendre l’utilisation du site." : "help us understand how the site is used."}
          </li>
          <li>
            <strong>{isFr ? "Marketing" : "Marketing"}</strong> — {isFr ? "utilisés pour mesurer et améliorer les campagnes." : "used to measure and improve campaigns."}
          </li>
        </ul>
        <h2>{isFr ? "Gestion de vos préférences" : "Managing Your Preferences"}</h2>
        <p>
          {isFr
            ? "Vous pouvez accepter, refuser ou personnaliser vos préférences via la bannière de consentement. Vous pouvez rouvrir la bannière à tout moment depuis le lien ‘Paramètres des cookies’ en pied de page."
            : "You can accept, refuse, or customize your preferences via the consent banner. You can reopen the banner anytime from the ‘Cookie settings’ link in the footer."}
        </p>
        <h2>{isFr ? "Contact" : "Contact"}</h2>
        <p>
          {isFr
            ? "Pour toute question concernant cette politique, veuillez nous contacter."
            : "For any questions regarding this policy, please contact us."}
        </p>
      </div>
    </div>
  );
}


