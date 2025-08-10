import { Locale } from "@/i18n/config";

export default async function TermsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">
        {isFr ? "Conditions d’utilisation" : "Terms of Service"}
      </h1>
      <div className="prose max-w-none text-black/80">
        <p>
          {isFr
            ? "Ces conditions régissent l’utilisation du site et des services proposés par Synaptiq. En accédant à ce site, vous acceptez ces conditions."
            : "These terms govern your use of the site and services provided by Synaptiq. By accessing this site, you agree to these terms."}
        </p>
        <h2>{isFr ? "Utilisation du service" : "Use of Service"}</h2>
        <p>
          {isFr
            ? "Vous acceptez d’utiliser le site conformément aux lois applicables et de ne pas nuire à son bon fonctionnement."
            : "You agree to use the site in compliance with applicable laws and not to interfere with its normal operation."}
        </p>
        <h2>{isFr ? "Limitation de responsabilité" : "Limitation of Liability"}</h2>
        <p>
          {isFr
            ? "Dans la mesure permise par la loi, Synaptiq ne peut être tenu responsable des dommages indirects ou imprévus."
            : "To the extent permitted by law, Synaptiq is not liable for indirect or unforeseeable damages."}
        </p>
        <h2>{isFr ? "Modification" : "Changes"}</h2>
        <p>
          {isFr
            ? "Nous pouvons mettre à jour ces conditions à tout moment. Les modifications s’appliquent dès leur publication."
            : "We may update these terms at any time. Changes apply upon publication."}
        </p>
        <h2>{isFr ? "Contact" : "Contact"}</h2>
        <p>
          {isFr
            ? "Pour toute question concernant ces conditions, veuillez nous contacter."
            : "For any questions regarding these terms, please contact us."}
        </p>
      </div>
    </div>
  );
}


