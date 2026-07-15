import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anthony Uyende",
  initials: "AU",
  location: "Montreal, Canada, EST", 
  locationLink: "https://maps.app.goo.gl/ETXpqQ35o9qxY7UL6", 
  personalWebsiteUrl: "https://anthonyuyende.com/",
  about:
    "Founder of Coalesc, the preparation layer for accounting firms.",
  summary:
    "Building Coalesc, the preparation layer for accounting firms. It turns messy client emails, PDFs, statements, and receipts into work-ready files before bookkeeping, tax, compilation, and assurance work begins. Previously data engineer at 1Password, data scientist at Shopify and Wealthsimple.",
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
      school: "University of Montreal",
      degree: "Bachelor's Degree in Mathematics and Computer Science, Data Science",
      start: "2020",
      end: "2024",
      logo: ''  
    },
  ],
  work: [
    {
      company: "Coalesc",
      link: "https://coalesc.ai/",
      badges: ["Full-time"],
      title: "Co-founder & CEO",
      logo: "",
      start: "October 2025",
      end: "Present",
      description:
        "At Coalesc, we're building the AI intake infrastructure for accounting firms. Every month, firms receive documents from everywhere — email attachments, scans, photos, shared drives, walk-ins. Before any accounting starts, someone has to open every file, split PDFs, rename documents, classify by type, match them to the right client, and chase what's missing. We automate that entire upstream workflow. Coalesc ingests documents from any channel, structures them, detects duplicates and gaps, and prepares a clean, audit-ready workspace before they ever touch DT Max, QuickBooks, or audit software. We're starting with tax and bookkeeping workflows, and expanding toward becoming the document operating layer for modern accounting firms. I lead product, engineering, sales, and user discovery — working directly with firms to turn chaotic document flows into structured, reliable systems.",
    },
    {
      company: "1Password",
      link: "https://1password.com/",
      badges: ["Remote"],
      title: "Data Engineer",
      logo: '',
      start: "March 2025",
      end: "January 2026",
      description:
        "Contributing to the Data Engineering team by optimizing data ingestion pipelines using Meltano, enhancing internal analytics workflows, and supporting compliance-related data tasks. Actively involved in maintaining ETL processes, improving data visibility in Looker, and collaborating cross-functionally to streamline reporting for business stakeholders. Skills: Python, Meltano, dbt, SQL, Looker, GitLab, AWS CLI, Salesforce data modeling.",
    },
    {
      company: "Boundary AI",
      link: "https://www.boundary-ai.com/",
      badges: ["Hybrid"],
      title: "Founding Team Member",
      logo: '',
      start: "August 2024",
      end: "November 2024",
      description:
        "Contributing to the development of AI-driven feedback analysis solutions for businesses, and actively working towards helping the team reach product-market fit. Spearheading the implementation of the 'Survey Series' feature, enabling users to track the evolution of survey responses over time. Collaborating with cross-functional teams to enhance product functionality and user experience. Skills: Python, NLP, Machine Learning, Product Development, Product-Market Fit, Cross-Functional Collaboration",
    },
    {
      company: "Unity",
      link: "https://unity.com/",
      badges: ["Hybrid"],
      title: "Data Engineer Intern",
      logo: '',
      start: "June 2023",
      end: "August 2023",
      description:
        "Focused on Data Governance by implementing data management best practices to ensure data quality and integrity. Led a Net Expansion Rate (NER) project using data analysis to predict revenue trends. Conducted data analytics to uncover operational insights, enhancing processes with visualization tools. Skills: Data Governance, Python, SQL, Data Analysis",
    },
    {
      company: "Wealthsimple",
      link: "https://www.wealthsimple.com/",
      badges: ["Remote"],
      title: "Data Science Intern",
      logo: '',
      start: "January 2023",
      end: "April 2023",
      description:
        "Developed and modernized data pipelines to improve data quality and processing efficiency. Collaborated with various teams to define data needs, providing actionable insights. Optimized data workflow performance by integrating DBT with Airflow. Skills: Python, DBT, Airflow, Data Analysis, Cross-Functional Collaboration",
    },
    {
      company: "Shopify",
      link: "https://www.shopify.com/",
      badges: ["Remote"],
      title: "Data Science Intern",
      logo: '',
      start: "January 2022",
      end: "August 2022",
      description:
        "Conducted cohort analysis using Shopify's data to assist product managers with insights. Analyzed extensive data sets to enable detailed merchant performance reports. Contributed to product improvement by enhancing data narratives and model development for the Shopify Notebook launch. Skills: SQL, Pandas, Mode Analytics, Data Mining, Data Storytelling",
    },
    {
      company: "Trans-Canada Capital (Air Canada)",
      link: "https://www.aircanada.com/",
      badges: ["Hybrid"],
      title: "Data Engineer Intern",
      logo: '',
      start: "June 2021",
      end: "September 2021",
      description:
        "Engaged in Time-Series Analysis by analyzing financial data with advanced data mining techniques to inform investment strategies. Maintained and enhanced a Flask-based web application for reliable market data delivery. Implemented process automation by developing and deploying Python scripts, increasing operational efficiency and accuracy. Skills: Python, SQL, Flask, Time-Series Analysis, Data Mining, Azure Cloud Services, Process Automation",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Data Analysis",
    "Machine Learning",
    "JavaScript",
    "React/Next.js",
    "Node.js",
    "Java",
    "Data Visualization (e.g., D3.js)",
    "NLP",
    "Product Development",
    "Product-Market Fit",
    "Cross-Functional Collaboration",
  ],
  projects: [
    {
      title: "Credit Risk ML System with Production Monitoring",
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
        "Developed a complete credit scoring system using Home Credit dataset (307K entries). Implemented advanced feature engineering for risk assessment, created DBT pipelines for data transformation, and designed Looker dashboards for real-time monitoring. Skills: Python, DBT, Looker, Feature Engineering, Risk Analytics, Model Monitoring, XGBoost, SHAP Values, Business Intelligence",
      logo: '',
      link: {
        label: "github.com/mercuretony/credit-risk-system",
        href: "https://github.com/mercuretony/credit-risk-system",
      },
      start: "March 2024",
      end: "Present",
    },
    {
      title: "LumiChat - An Interactive Chat Application",
      techStack: [
        "Side Project",
        "React",
        "FastAPI",
        "OpenAI GPT",
        "PostgreSQL",
        "WebSockets",
        "JWT",
        "D3.js",
        "Agile Methodologies",
      ],
      description:
        "Developed an AI-driven chat application integrating React with FastAPI and OpenAI's GPT model. Streamlined authentication using JWT and employed D3.js for data visualization. Skills: React, FastAPI, OpenAI GPT, PostgreSQL, WebSockets, JWT, D3.js, Agile Methodologies, Cross-Functional Collaboration",
      logo: '',
      link: {
        label: "lumichat.com",
        href: "https://www.figma.com/file/C82sG81SbTJhzpgaEdZqJz/LumiLivre?type=design&node-id=15-252&mode=design",
      },
      start: "November 2023",
      end: "May 2024",
    },
    {
      title: "Classification of Hand Signs (ASL)",
      techStack: ["Machine Learning", "Python", "Data Preprocessing", "Convolutional Neural Networks", "Random Forests"],
      description:
        "Curated a dataset of over 34,000 images of American Sign Language hand signs, ensuring diversity and comprehensiveness. Developed a preprocessing pipeline to clean and standardize data, enhancing model training efficacy. Trained and evaluated machine learning models, including convolutional neural networks and random forests, for accurate classification of hand signs. Skills: Machine Learning, Python, Data Preprocessing, Convolutional Neural Networks, Random Forests, Model Evaluation",
      logo: '',
      link: {
        label: "Google Colab",
        href: "https://colab.research.google.com/drive/1WStvzSLhQJbaXN0BTw46jvNVsitWswsl",
      },
      start: "February 2021",
      end: "February 2021",
    },
    {
    title: "Merchant Analytical Journey: Adoption and Retention Analysis",
    techStack: ["Python", "SQL", "Pandas", "Data Analysis", "Cohort Analysis", "Visualization"],
    description:
      "Conducted comprehensive cohort analyses to understand merchant adoption and retention rates for the Live View feature. Key findings include a 72.1% adoption rate within the first month post-sale, with a retention plateau of about 20% after four months. Posed critical follow-up questions regarding alternative tools that may offer more value to merchants, suggesting areas for further strategic improvement.",
    logo: '',
    link: {
      label: "View Analysis",
      href: "https://docs.google.com/presentation/d/1J2HRfOLJb_ycDSfW1oGl6oLFI00LqoUngGkf2IhwNDM/edit?usp=sharing",
    },
    start: "June 2022",
    end: "August 2022",
  },
  ],
} as const;

// French overlay for the translatable resume fields. Language-neutral fields
// (contact, dates, company names, links, tech stacks) are inherited from
// RESUME_DATA. Arrays are aligned by index with RESUME_DATA.
const RESUME_FR = {
  about: "Fondateur de Coalesc, la couche de préparation pour les cabinets comptables.",
  summary:
    "Je bâtis Coalesc, la couche de préparation pour les cabinets comptables. Elle transforme les courriels, PDF, relevés et reçus désordonnés des clients en dossiers prêts à traiter, avant que la tenue de livres, la fiscalité, la compilation et la certification puissent commencer. Auparavant ingénieur de données chez 1Password, scientifique de données chez Shopify et Wealthsimple.",
  badges: {
    "Full-time": "Temps plein",
    Remote: "À distance",
    Hybrid: "Hybride",
  } as Record<string, string>,
  education: [
    {
      school: "Université de Montréal",
      degree: "Baccalauréat en mathématiques et informatique, concentration science des données",
    },
  ],
  work: [
    {
      title: "Cofondateur et PDG",
      description:
        "Chez Coalesc, nous bâtissons l'infrastructure de réception de documents propulsée par l'IA pour les cabinets comptables. Chaque mois, les cabinets reçoivent des documents de partout : pièces jointes de courriels, numérisations, photos, lecteurs partagés, visites au bureau. Avant que tout travail comptable ne commence, quelqu'un doit ouvrir chaque fichier, séparer les PDF, renommer les documents, les classer par type, les associer au bon client et relancer ce qui manque. Nous automatisons tout ce flux en amont. Coalesc reçoit les documents de n'importe quel canal, les structure, détecte les doublons et les manques, et prépare un espace de travail propre et prêt pour la certification avant même qu'ils ne touchent DT Max, QuickBooks ou un logiciel de certification. Nous commençons par les flux de fiscalité et de tenue de livres, et nous évoluons vers la couche d'exploitation documentaire des cabinets comptables modernes. Je dirige le produit, l'ingénierie, les ventes et la découverte client, en travaillant directement avec les cabinets pour transformer des flux documentaires chaotiques en systèmes structurés et fiables.",
    },
    {
      title: "Ingénieur de données",
      description:
        "Contribution à l'équipe d'ingénierie de données en optimisant les pipelines d'ingestion de données avec Meltano, en améliorant les flux d'analytique interne et en soutenant les tâches de données liées à la conformité. Participation active au maintien des processus ETL, à l'amélioration de la visibilité des données dans Looker et à la collaboration interfonctionnelle pour simplifier la production de rapports destinés aux parties prenantes. Compétences : Python, Meltano, dbt, SQL, Looker, GitLab, AWS CLI, modélisation de données Salesforce.",
    },
    {
      title: "Membre de l'équipe fondatrice",
      description:
        "Contribution au développement de solutions d'analyse de rétroaction propulsées par l'IA pour les entreprises, et travail actif pour aider l'équipe à atteindre l'adéquation produit-marché. Pilotage de la mise en œuvre de la fonctionnalité « Survey Series », permettant aux utilisateurs de suivre l'évolution des réponses aux sondages dans le temps. Collaboration avec des équipes interfonctionnelles pour améliorer les fonctionnalités du produit et l'expérience utilisateur. Compétences : Python, TALN, apprentissage automatique, développement de produits, adéquation produit-marché, collaboration interfonctionnelle.",
    },
    {
      title: "Stagiaire en ingénierie de données",
      description:
        "Concentration sur la gouvernance des données par la mise en œuvre de bonnes pratiques de gestion des données afin d'assurer leur qualité et leur intégrité. Pilotage d'un projet de taux d'expansion net (NER) à l'aide de l'analyse de données pour prédire les tendances de revenus. Réalisation d'analyses de données pour dégager des informations opérationnelles, améliorant les processus grâce à des outils de visualisation. Compétences : gouvernance des données, Python, SQL, analyse de données.",
    },
    {
      title: "Stagiaire en science des données",
      description:
        "Développement et modernisation de pipelines de données pour améliorer la qualité et l'efficacité du traitement des données. Collaboration avec diverses équipes pour définir les besoins en données et fournir des informations exploitables. Optimisation de la performance des flux de données en intégrant DBT à Airflow. Compétences : Python, DBT, Airflow, analyse de données, collaboration interfonctionnelle.",
    },
    {
      title: "Stagiaire en science des données",
      description:
        "Réalisation d'analyses de cohortes à partir des données de Shopify pour aider les chefs de produit avec des informations pertinentes. Analyse de vastes ensembles de données pour produire des rapports détaillés sur la performance des marchands. Contribution à l'amélioration du produit en enrichissant les récits de données et le développement de modèles pour le lancement de Shopify Notebook. Compétences : SQL, Pandas, Mode Analytics, exploration de données, narration par les données.",
    },
    {
      title: "Stagiaire en ingénierie de données",
      description:
        "Réalisation d'analyses de séries temporelles en analysant des données financières avec des techniques avancées d'exploration de données pour orienter les stratégies de placement. Maintien et amélioration d'une application web basée sur Flask pour une diffusion fiable des données de marché. Mise en place d'automatisation des processus par le développement et le déploiement de scripts Python, augmentant l'efficacité et la précision opérationnelles. Compétences : Python, SQL, Flask, analyse de séries temporelles, exploration de données, services infonuagiques Azure, automatisation des processus.",
    },
  ],
  skills: {
    "Data Analysis": "Analyse de données",
    "Machine Learning": "Apprentissage automatique",
    "Data Visualization (e.g., D3.js)": "Visualisation de données (p. ex. D3.js)",
    "Product Development": "Développement de produits",
    "Product-Market Fit": "Adéquation produit-marché",
    "Cross-Functional Collaboration": "Collaboration interfonctionnelle",
  } as Record<string, string>,
  projects: [
    {
      title: "Système d'apprentissage automatique de risque de crédit avec surveillance en production",
      description:
        "Développement d'un système complet de cotation de crédit à partir du jeu de données Home Credit (307 000 entrées). Mise en œuvre d'une ingénierie de caractéristiques avancée pour l'évaluation du risque, création de pipelines DBT pour la transformation des données et conception de tableaux de bord Looker pour la surveillance en temps réel. Compétences : Python, DBT, Looker, ingénierie de caractéristiques, analytique du risque, surveillance de modèles, XGBoost, valeurs SHAP, intelligence d'affaires.",
    },
    {
      title: "LumiChat – Une application de clavardage interactive",
      description:
        "Développement d'une application de clavardage propulsée par l'IA intégrant React à FastAPI et au modèle GPT d'OpenAI. Simplification de l'authentification à l'aide de JWT et utilisation de D3.js pour la visualisation de données. Compétences : React, FastAPI, GPT d'OpenAI, PostgreSQL, WebSockets, JWT, D3.js, méthodologies agiles, collaboration interfonctionnelle.",
    },
    {
      title: "Classification des signes de la main (ASL)",
      description:
        "Constitution d'un jeu de données de plus de 34 000 images de signes de la main de la langue des signes américaine, en assurant diversité et exhaustivité. Développement d'un pipeline de prétraitement pour nettoyer et normaliser les données, améliorant l'efficacité de l'entraînement des modèles. Entraînement et évaluation de modèles d'apprentissage automatique, dont des réseaux de neurones convolutifs et des forêts aléatoires, pour une classification précise des signes de la main. Compétences : apprentissage automatique, Python, prétraitement de données, réseaux de neurones convolutifs, forêts aléatoires, évaluation de modèles.",
    },
    {
      title: "Parcours analytique des marchands : analyse d'adoption et de rétention",
      description:
        "Réalisation d'analyses de cohortes exhaustives pour comprendre les taux d'adoption et de rétention des marchands pour la fonctionnalité Live View. Les constats clés incluent un taux d'adoption de 72,1 % au cours du premier mois suivant la vente, avec un plateau de rétention d'environ 20 % après quatre mois. Formulation de questions de suivi cruciales sur d'autres outils susceptibles d'offrir plus de valeur aux marchands, suggérant des pistes d'amélioration stratégique.",
    },
  ],
};

type ResumeData = typeof RESUME_DATA;

export function getResumeData(locale: string): ResumeData {
  if (locale !== "fr") return RESUME_DATA;

  return {
    ...RESUME_DATA,
    about: RESUME_FR.about,
    summary: RESUME_FR.summary,
    education: RESUME_DATA.education.map((e, i) => ({
      ...e,
      school: RESUME_FR.education[i]?.school ?? e.school,
      degree: RESUME_FR.education[i]?.degree ?? e.degree,
    })),
    work: RESUME_DATA.work.map((w, i) => ({
      ...w,
      title: RESUME_FR.work[i]?.title ?? w.title,
      description: RESUME_FR.work[i]?.description ?? w.description,
      badges: w.badges.map((b) => RESUME_FR.badges[b] ?? b),
    })),
    skills: RESUME_DATA.skills.map((s) => RESUME_FR.skills[s] ?? s),
    projects: RESUME_DATA.projects.map((p, i) => ({
      ...p,
      title: RESUME_FR.projects[i]?.title ?? p.title,
      description: RESUME_FR.projects[i]?.description ?? p.description,
    })),
  } as unknown as ResumeData;
}
