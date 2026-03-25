import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anthony Uyende",
  initials: "AU",
  location: "Montreal, Canada, EST", 
  locationLink: "https://maps.app.goo.gl/ETXpqQ35o9qxY7UL6", 
  personalWebsiteUrl: "https://anthonyuyende.com/",
  about:
    "Founder of Coalesc — AI document infrastructure for accounting.",
  summary:
    "Building Coalesc, the document infrastructure layer that powers accounting workflows — from bookkeeping to tax to audit. Every accounting workflow starts with the same problem: chaotic documents. We own that layer. Previously data engineer at 1Password, data scientist at Shopify and Wealthsimple.", 
    avatarUrl: "/WZUA17vg_400x400.jpg",
  contact: {
    email: "anthony.m.uyende@gmail.com",
    tel: "+1 438-866-3006",
    social: [
      // Update or add your social links here
      {
        name: "GitHub",
        url: "https://github.com/MercureTony", // Replace with your GitHub profile
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anthony-uyende/", // Replace with your LinkedIn profile
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/auyende",
        icon: XIcon,
      },
      // Add or remove social icons as needed
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
      start: "May 2025",
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
      link: "https://www.boundary-ai.com/", // Replace with the actual company link if available
      badges: ["Hybrid"],
      title: "Founding Team Member",
      logo: '', // Replace with the actual logo if available
      start: "August 2024",
      end: "November 2024",
      description:
        "Contributing to the development of AI-driven feedback analysis solutions for businesses, and actively working towards helping the team reach product-market fit. Spearheading the implementation of the 'Survey Series' feature, enabling users to track the evolution of survey responses over time. Collaborating with cross-functional teams to enhance product functionality and user experience. Skills: Python, NLP, Machine Learning, Product Development, Product-Market Fit, Cross-Functional Collaboration",
    },
    {
      company: "Unity",
      link: "https://unity.com/", // Replace with the actual company link if available
      badges: ["Hybrid"], // Update as appropriate
      title: "Data Engineer Intern",
      logo: '', // Replace with the actual logo if available
      start: "June 2023",
      end: "August 2023",
      description:
        "Focused on Data Governance by implementing data management best practices to ensure data quality and integrity. Led a Net Expansion Rate (NER) project using data analysis to predict revenue trends. Conducted data analytics to uncover operational insights, enhancing processes with visualization tools. Skills: Data Governance, Python, SQL, Data Analysis",
    },
    {
      company: "Wealthsimple",
      link: "https://www.wealthsimple.com/", // Replace with the actual company link if available
      badges: ["Remote"], // Update as appropriate
      title: "Data Science Intern",
      logo: '', // Replace with the actual logo if available
      start: "January 2023",
      end: "April 2023",
      description:
        "Developed and modernized data pipelines to improve data quality and processing efficiency. Collaborated with various teams to define data needs, providing actionable insights. Optimized data workflow performance by integrating DBT with Airflow. Skills: Python, DBT, Airflow, Data Analysis, Cross-Functional Collaboration",
    },
    {
      company: "Shopify",
      link: "https://www.shopify.com/", // Replace with the actual company link if available
      badges: ["Remote"], // Update as appropriate
      title: "Data Science Intern",
      logo: '', // Replace with the actual logo if available
      start: "January 2022",
      end: "August 2022",
      description:
        "Conducted cohort analysis using Shopify's data to assist product managers with insights. Analyzed extensive data sets to enable detailed merchant performance reports. Contributed to product improvement by enhancing data narratives and model development for the Shopify Notebook launch. Skills: SQL, Pandas, Mode Analytics, Data Mining, Data Storytelling",
    },
    {
      company: "Trans-Canada Capital (Air Canada)",
      link: "https://www.aircanada.com/", // Replace with the actual company link if available
      badges: ["Hybrid"], // Update as appropriate
      title: "Data Engineer Intern",
        logo: '', // Replace with the actual logo if available
      start: "June 2021",
      end: "September 2021",
      description:
        "Engaged in Time-Series Analysis by analyzing financial data with advanced data mining techniques to inform investment strategies. Maintained and enhanced a Flask-based web application for reliable market data delivery. Implemented process automation by developing and deploying Python scripts, increasing operational efficiency and accuracy. Skills: Python, SQL, Flask, Time-Series Analysis, Data Mining, Azure Cloud Services, Process Automation",
    },
  ],
  skills: [
    // List your skills here
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
    // Add or remove skills as needed
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
      logo: '', // À remplacer avec un logo si disponible
      link: {
        label: "github.com/mercuretony/credit-risk-system", // À remplacer avec votre lien GitHub
        href: "https://github.com/mercuretony/credit-risk-system",
      },
      start: "Mars 2024",
      end: "En cours",
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
      logo: '', // Replace with the actual logo if available
      link: {
        label: "lumichat.com", // Replace with the actual project link if available
        href: "https://www.figma.com/file/C82sG81SbTJhzpgaEdZqJz/LumiLivre?type=design&node-id=15-252&mode=design",
      },
      start: "November 2023",
      end: "May 2024", // Update the end date if the project is completed
    },
    {
      title: "Classification of Hand Signs (ASL)",
      techStack: ["Machine Learning", "Python", "Data Preprocessing", "Convolutional Neural Networks", "Random Forests"],
      description:
        "Curated a dataset of over 34,000 images of American Sign Language hand signs, ensuring diversity and comprehensiveness. Developed a preprocessing pipeline to clean and standardize data, enhancing model training efficacy. Trained and evaluated machine learning models, including convolutional neural networks and random forests, for accurate classification of hand signs. Skills: Machine Learning, Python, Data Preprocessing, Convolutional Neural Networks, Random Forests, Model Evaluation",
      logo: '', // Replace with the actual project logo if available
      link: {
        label: "Google Colab", // Replace with the actual project link if available
        href: "https://colab.research.google.com/drive/1WStvzSLhQJbaXN0BTw46jvNVsitWswsl", // Replace with the actual project link if available
      },
      start: "February 2021",
      end: "February 2021", // Update the end date if the project is completed
    },
    {
    title: "Merchant Analytical Journey: Adoption and Retention Analysis",
    techStack: ["Python", "SQL", "Pandas", "Data Analysis", "Cohort Analysis", "Visualization"],
    description:
      "Conducted comprehensive cohort analyses to understand merchant adoption and retention rates for the Live View feature. Key findings include a 72.1% adoption rate within the first month post-sale, with a retention plateau of about 20% after four months. Posed critical follow-up questions regarding alternative tools that may offer more value to merchants, suggesting areas for further strategic improvement.",
    logo: '', // Replace with the actual project logo if available
    link: {
      label: "View Analysis", // Replace with the actual project link if available
      href: "https://docs.google.com/presentation/d/1J2HRfOLJb_ycDSfW1oGl6oLFI00LqoUngGkf2IhwNDM/edit?usp=sharing", // Direct link to your project or related presentation
    },
    start: "June 2022", 
    end: "August 2022", 
  },
  ],
} as const;
