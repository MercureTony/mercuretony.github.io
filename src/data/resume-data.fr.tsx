import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA_FR = {
  name: "Anthony Uyende",
  initials: "AU",
  location: "Montréal, Canada, HNE",
  locationLink: "https://maps.app.goo.gl/ETXpqQ35o9qxY7UL6",
  personalWebsiteUrl: "https://anthonyuyende.com/",
  about:
    "Fondateur de Coalesc, la couche de préparation pour les cabinets comptables.",
  summary:
    "Je construis Coalesc, la couche de préparation pour les cabinets comptables. Le produit transforme les courriels, PDF, relevés et reçus désordonnés des clients en dossiers prêts à travailler avant le début de la tenue de livres, de la fiscalité, de la compilation ou de l’assurance. Auparavant ingénieur de données chez 1Password et data scientist chez Shopify et Wealthsimple.",
  avatarUrl: "/WZUA17vg_400x400.jpg",
  contact: {
    email: "anthony.m.uyende@gmail.com",
    tel: "+1 438-866-3006",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MercureTony",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anthony-uyende/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/auyende",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Université de Montréal",
      degree:
        "Baccalauréat en mathématiques et informatique, orientation science des données",
      start: "2020",
      end: "2024",
      logo: "",
    },
  ],
  work: [
    {
      company: "Coalesc",
      link: "https://coalesc.ai/",
      badges: ["Temps plein"],
      title: "Cofondateur et CEO",
      logo: "",
      start: "Octobre 2025",
      end: "Aujourd’hui",
      description:
        "Chez Coalesc, je construis l’infrastructure d’intake alimentée par l’IA pour les cabinets comptables. Les documents arrivent de partout : pièces jointes, scans, photos, dossiers partagés et documents papier. Avant que le travail comptable commence, quelqu’un doit ouvrir les fichiers, séparer les PDF, les renommer, les classer, les rattacher au bon client et relancer ce qui manque. Coalesc automatise cette préparation en amont et crée un espace de travail propre et vérifiable avant le passage vers les logiciels comptables. Je dirige le produit, l’ingénierie, les ventes et la recherche utilisateur.",
    },
    {
      company: "1Password",
      link: "https://1password.com/",
      badges: ["À distance"],
      title: "Ingénieur de données",
      logo: "",
      start: "Mars 2025",
      end: "Janvier 2026",
      description:
        "Contribution à l’équipe Data Engineering : optimisation des pipelines d’ingestion avec Meltano, amélioration des flux analytiques internes, soutien aux besoins de conformité, maintenance des processus ETL et amélioration de la visibilité des données dans Looker.",
    },
    {
      company: "Boundary AI",
      link: "https://www.boundary-ai.com/",
      badges: ["Hybride"],
      title: "Membre de l’équipe fondatrice",
      logo: "",
      start: "Août 2024",
      end: "Novembre 2024",
      description:
        "Participation au développement de solutions d’analyse de rétroaction alimentées par l’IA. Mise en œuvre de la fonctionnalité Survey Series afin de suivre l’évolution des réponses au fil du temps et collaboration avec plusieurs fonctions pour améliorer le produit.",
    },
    {
      company: "Unity",
      link: "https://unity.com/",
      badges: ["Hybride"],
      title: "Stagiaire en ingénierie de données",
      logo: "",
      start: "Juin 2023",
      end: "Août 2023",
      description:
        "Travail sur la gouvernance des données, la qualité et l’intégrité des données. Réalisation d’un projet sur le Net Expansion Rate à partir d’analyses visant à prévoir les tendances de revenus et à améliorer les opérations.",
    },
    {
      company: "Wealthsimple",
      link: "https://www.wealthsimple.com/",
      badges: ["À distance"],
      title: "Stagiaire en science des données",
      logo: "",
      start: "Janvier 2023",
      end: "Avril 2023",
      description:
        "Développement et modernisation de pipelines de données, collaboration avec différentes équipes pour définir leurs besoins et optimisation des flux en intégrant dbt à Airflow.",
    },
    {
      company: "Shopify",
      link: "https://www.shopify.com/",
      badges: ["À distance"],
      title: "Stagiaire en science des données",
      logo: "",
      start: "Janvier 2022",
      end: "Août 2022",
      description:
        "Analyses de cohortes à partir des données de Shopify pour aider les équipes produit. Analyse de grands ensembles de données, production d’insights sur la performance des marchands et contribution aux récits de données et aux modèles liés au lancement de Shopify Notebook.",
    },
    {
      company: "Trans-Canada Capital (Air Canada)",
      link: "https://www.aircanada.com/",
      badges: ["Hybride"],
      title: "Stagiaire en ingénierie de données",
      logo: "",
      start: "Juin 2021",
      end: "Septembre 2021",
      description:
        "Analyse de séries temporelles sur des données financières, maintenance d’une application Flask de données de marché et automatisation de processus avec Python afin d’améliorer l’efficacité et la fiabilité.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Analyse de données",
    "Machine Learning",
    "JavaScript",
    "React/Next.js",
    "Node.js",
    "Java",
    "Visualisation de données",
    "NLP",
    "Développement produit",
    "Product-Market Fit",
    "Collaboration interfonctionnelle",
  ],
  projects: [
    {
      title: "Système ML de risque de crédit avec suivi en production",
      techStack: [
        "Data Science",
        "Python",
        "DBT",
        "Looker",
        "XGBoost",
        "SHAP",
        "PostgreSQL",
        "Risk Analytics",
        "Production Monitoring",
      ],
      description:
        "Développement d’un système complet de score de crédit à partir du jeu de données Home Credit. Mise en place de l’ingénierie de variables, de pipelines dbt et de tableaux de bord Looker pour le suivi en production.",
      logo: "",
      link: {
        label: "github.com/mercuretony/credit-risk-system",
        href: "https://github.com/mercuretony/credit-risk-system",
      },
      start: "Mars 2024",
      end: "Aujourd’hui",
    },
    {
      title: "LumiChat - Application de discussion interactive",
      techStack: [
        "Side Project",
        "React",
        "FastAPI",
        "OpenAI GPT",
        "PostgreSQL",
        "WebSockets",
        "JWT",
        "D3.js",
      ],
      description:
        "Développement d’une application de discussion alimentée par l’IA avec React, FastAPI et les modèles GPT d’OpenAI, avec authentification JWT, PostgreSQL, WebSockets et visualisations D3.js.",
      logo: "",
      link: {
        label: "lumichat.com",
        href: "https://www.figma.com/file/C82sG81SbTJhzpgaEdZqJz/LumiLivre?type=design&node-id=15-252&mode=design",
      },
      start: "Novembre 2023",
      end: "Mai 2024",
    },
    {
      title: "Classification de signes de la langue des signes américaine",
      techStack: [
        "Machine Learning",
        "Python",
        "Data Preprocessing",
        "CNN",
        "Random Forests",
      ],
      description:
        "Création d’un jeu de données de plus de 34 000 images, mise en place d’un pipeline de prétraitement et entraînement de modèles de classification comprenant des réseaux convolutionnels et des forêts aléatoires.",
      logo: "",
      link: {
        label: "Google Colab",
        href: "https://colab.research.google.com/drive/1WStvzSLhQJbaXN0BTw46jvNVsitWswsl",
      },
      start: "Février 2021",
      end: "Février 2021",
    },
    {
      title: "Merchant Analytical Journey: analyse de l’adoption et de la rétention",
      techStack: [
        "Python",
        "SQL",
        "Pandas",
        "Data Analysis",
        "Cohort Analysis",
        "Visualization",
      ],
      description:
        "Analyse de cohortes sur l’adoption et la rétention de Live View, avec étude des comportements après la vente et formulation de questions produit sur les outils alternatifs utilisés par les marchands.",
      logo: "",
      link: {
        label: "Voir l’analyse",
        href: "https://docs.google.com/presentation/d/1J2HRfOLJb_ycDSfW1oGl6oLFI00LqoUngGkf2IhwNDM/edit?usp=sharing",
      },
      start: "Juin 2022",
      end: "Août 2022",
    },
  ],
} as const;
