import { Locale } from "../config";

export const en = {
  nav: {
    about: "About",
    services: "Services",
    approach: "Approach",
    process: "Process",
    expertise: "Expertise",
    caseStudies: "Case Studies",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title: "The intelligence that connects you to tomorrow.",
    subtitle:
      "We bridge strategy and technology with intelligent AI and automation solutions, creating the connections for your success.",
    cta: "Schedule a Consultation",
    calendly: "Book via Calendly",
  },
  about: {
    title: "Performance is Born from Connection",
    text:
      "Inspired by the synapse—the vital bridge that transmits information in the brain—we close the critical gap between a brilliant idea and its tangible success. We are the architects of these connections.",
  },
  approach: {
    title: "Our Approach",
    strategyTitle: "Connect to Strategy",
    strategyText:
      "We begin with a deep, collaborative analysis to co-design a bespoke AI and automation roadmap, ensuring every action is precisely aligned with your goals.",
    techTitle: "Connect to Technology",
    techText:
      "We bring your strategy to life by deploying a powerful suite of curated AI systems, software solutions, and high-performance hardware engineered for seamless integration.",
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Strategy",
        desc: "Clarity and focus with an AI & automation roadmap aligned to outcomes.",
        bullets: [
          "Discovery workshops",
          "Prioritized use-cases",
          "ROI and feasibility",
        ],
        slug: "strategy",
      },
      {
        title: "Automation Design",
        desc: "From quick wins to robust workflows across your stack.",
        bullets: ["Process mapping", "Human-in-the-loop", "Observability"],
        slug: "automation-design",
      },
      {
        title: "AI Integrations",
        desc: "Curated models and tools embedded into your operations.",
        bullets: ["LLM orchestration", "RAG & embeddings", "Guardrails & evals"],
        slug: "ai-integrations",
      },
      {
        title: "Custom Apps",
        desc: "Purpose-built apps for internal teams and customers.",
        bullets: ["Rapid prototyping", "Internal tooling", "Design systems"],
        slug: "custom-apps",
      },
      {
        title: "Data & Infra",
        desc: "Resilient foundations for scale and security.",
        bullets: ["Pipelines & storage", "Access controls", "Cost optimization"],
        slug: "data-infra",
      },
      {
        title: "Enablement",
        desc: "Upskill your teams to operate and evolve solutions.",
        bullets: ["Playbooks", "Training", "Change management"],
        slug: "enablement",
      },
    ],
  },
  process: {
    title: "Process",
    steps: ["Discover", "Design", "Deploy", "Elevate"],
    stepDescs: [
      "Understand goals, constraints, and opportunities.",
      "Blueprint solutions and plan delivery.",
      "Implement securely and iteratively.",
      "Measure, optimize, and scale.",
    ],
  },
  expertise: {
    title: "Mastering the Tools of Intelligent Automation",
    text:
      "Our expertise covers a full spectrum of automation tools, from rapid integration platforms to bespoke application development.",
  },
  cases: {
    title: "Case Studies",
    items: [
      {
        company: "Fintech Ops",
        result: "-42% manual workload in underwriting",
        detail: "Automated document extraction and verification across 3 systems.",
      },
      {
        company: "E-commerce",
        result: "+19% conversion via intelligent merchandising",
        detail: "Personalized recommendations integrated into headless storefront.",
      },
      {
        company: "Healthcare",
        result: "24h to 2h referral processing",
        detail: "n8n-driven workflow with human approval steps and audit trails.",
      },
    ],
  },
  faq: {
    title: "FAQ",
  },
  insights: {
    title: "Insights",
    text: "Articles on AI and automation — strategy, integrations, and real-world playbooks.",
    cta: "Read on Medium",
  },
  contact: {
    title: "Let’s Architect Your Success",
    name: "Name",
    company: "Company",
    email: "Email",
    message: "Message",
    submit: "Submit",
    submitting: "Submitting…",
    success: "Thanks—your message has been sent.",
    error: "Something went wrong.",
  },
} as const;

export type Dictionary = typeof en;

export function getDictionary(_locale: Locale) {
  return en; // server helper swapped by route loaders
}


