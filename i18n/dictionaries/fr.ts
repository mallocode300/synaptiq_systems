import { Locale } from "../config";

export const fr = {
  nav: {
    about: "À propos",
    services: "Services",
    approach: "Approche",
    process: "Processus",
    expertise: "Expertise",
    caseStudies: "Études de cas",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title: "L’intelligence qui vous connecte à demain.",
    subtitle:
      "Nous relions la stratégie et la technologie avec des solutions d’IA et d’automatisation, pour créer les connexions de votre succès.",
    cta: "Planifier une consultation",
    calendly: "Réserver via Calendly",
  },
  about: {
    title: "La performance naît de la connexion",
    text:
      "Inspirés par la synapse — le pont vital qui transmet l’information dans le cerveau — nous comblons l’écart entre une idée brillante et son succès tangible. Nous en sommes les architectes. Notre travail relie stratégie, logiciels et matériels en un système cohérent, afin que chaque décision, flux et interface serve vos objectifs et crée un effet cumulatif.",
  },
  approach: {
    title: "Notre approche",
    strategyTitle: "Connexion à la stratégie",
    strategyText:
      "Nous commençons par une analyse collaborative pour co‑concevoir une feuille de route IA et automatisation, parfaitement alignée avec vos objectifs.",
    techTitle: "Connexion à la technologie",
    techText:
      "Nous donnons vie à votre stratégie en déployant un ensemble d’IA, de logiciels et de matériels performants, conçus pour une intégration fluide.",
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Stratégie",
        desc: "Clarté et focalisation avec une feuille de route IA & automatisation orientée résultats.",
        bullets: [
          "Ateliers de découverte",
          "Cas d’usage priorisés",
          "ROI et faisabilité",
        ],
        slug: "strategie",
      },
      {
        title: "Design d’automatisation",
        desc: "Des quick wins aux workflows robustes à l’échelle.",
        bullets: ["Cartographie des processus", "Human-in-the-loop", "Observabilité"],
        slug: "design-automation",
      },
      {
        title: "Intégrations IA",
        desc: "Des modèles et outils sélectionnés, intégrés à vos opérations.",
        bullets: ["Orchestration LLM", "RAG & embeddings", "Garde‑fous & évaluations"],
        slug: "integrations-ia",
      },
      {
        title: "Applications sur mesure",
        desc: "Des apps pensées pour vos équipes internes et vos clients.",
        bullets: ["Prototypage rapide", "Outils internes", "Design systems"],
        slug: "applications-sur-mesure",
      },
      {
        title: "Données & Infra",
        desc: "Des fondations résilientes pour l’échelle et la sécurité.",
        bullets: ["Pipelines & stockage", "Contrôles d’accès", "Optimisation des coûts"],
        slug: "donnees-infra",
      },
      {
        title: "Enablement",
        desc: "Montez en compétence pour opérer et faire évoluer les solutions.",
        bullets: ["Playbooks", "Formations", "Conduite du changement"],
        slug: "enablement",
      },
    ],
  },
  process: {
    title: "Processus",
    steps: ["Découvrir", "Concevoir", "Déployer", "Élever"],
    stepDescs: [
      "Comprendre objectifs, contraintes et opportunités.",
      "Concevoir l’architecture et planifier la livraison.",
      "Déployer en toute sécurité et par itérations.",
      "Mesurer, optimiser et passer à l’échelle.",
    ],
  },
  expertise: {
    title: "Maîtriser les outils de l’automatisation intelligente",
    text:
      "Notre expertise couvre tout le spectre des outils d’automatisation, des intégrations rapides au développement d’applications sur mesure.",
  },
  cases: {
    title: "Études de cas",
    items: [
      {
        company: "Fintech Ops",
        result: "-42% de charge manuelle en underwriting",
        detail: "Extraction et vérification automatisées de documents sur 3 systèmes.",
      },
      {
        company: "E‑commerce",
        result: "+19% de conversion grâce au merchandising intelligent",
        detail: "Recommandations personnalisées intégrées au storefront headless.",
      },
      {
        company: "Santé",
        result: "Traitement des orientations de 24h à 2h",
        detail: "Workflow n8n avec étapes d’approbation humaines et traces d’audit.",
      },
    ],
  },
  faq: {
    title: "FAQ",
  },
  insights: {
    title: "Analyses",
    text: "Articles sur l’IA et l’automatisation — stratégie, intégrations et cas concrets.",
    cta: "Lire sur Medium",
  },
  contact: {
    title: "Architecturons votre succès",
    name: "Nom",
    company: "Entreprise",
    email: "E‑mail",
    message: "Message",
    submit: "Envoyer",
    submitting: "Envoi…",
    success: "Merci — votre message a été envoyé.",
    error: "Une erreur est survenue.",
  },
} as const;

export type DictionaryFr = typeof fr;

export function getDictionary(_locale: Locale) {
  return fr;
}


