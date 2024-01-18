import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anthony Uyende",
  initials: "AU",
  location: "Montreal, Canada, EST", 
  locationLink: "https://maps.app.goo.gl/ETXpqQ35o9qxY7UL6", 
  personalWebsiteUrl: "https://www.mercuretony.github.io",
  about:
    "Data Scientist and Full Stack Engineer with a robust background in mathematics and computer science", // Customize as needed
  summary:
    "Data Scientist and Full Stack Engineer with a background in math and computer science, focused on using data and technology to create user-friendly, effective solutions. I build applications that make businesses run smoother and always aim to keep learning and uphold ethical standards in my work.", 
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQHZUGxVCbOiFQ/profile-displayphoto-shrink_400_400/0/1664367385216?e=1709769600&v=beta&t=dAKbNmWf-tWm9XnfGOae8wkMccdzoFnVnMIKrmxxo94", 
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
        url: "https://twitter.com/mercure_tony",
        icon: XIcon,
      },
      // Add or remove social icons as needed
    ],
  },
  education: [
    {
      school: "University of Montreal",
      degree: "Bachelor's Degree in Mathematics and Computer Science, Data Science",
      start: "Present",
      end: "2024",
      logo: ConsultlyLogo, // Replace with the actual logo if available
    },
  ],
  work: [
    {
      company: "Unity",
      link: "https://unity.com/", // Replace with the actual company link if available
      badges: ["Remote"], // Update as appropriate
      title: "Data Engineer Intern",
      logo: ConsultlyLogo, // Replace with the actual logo if available
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
      logo: ConsultlyLogo, // Replace with the actual logo if available
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
      logo: ConsultlyLogo, // Replace with the actual logo if available
      start: "January 2022",
      end: "August 2022",
      description:
        "Conducted cohort analysis using Shopify's data to assist product managers with insights. Analyzed extensive data sets to enable detailed merchant performance reports. Contributed to product improvement by enhancing data narratives and model development for the Shopify Notebook launch. Skills: SQL, Pandas, Mode Analytics, Data Mining, Data Storytelling",
    },
    {
      company: "Trans-Canada Capital (Air Canada)",
      link: "https://www.aircanada.com/", // Replace with the actual company link if available
      badges: ["Remote"], // Update as appropriate
      title: "Data Engineer Intern",
      logo: ConsultlyLogo, // Replace with the actual logo if available
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
    // Add or remove skills as needed
  ],
  projects: [
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
      logo: ConsultlyLogo, // Replace with the actual logo if available
      link: {
        label: "lumichat.com", // Replace with the actual project link if available
        href: "https://www.figma.com/file/C82sG81SbTJhzpgaEdZqJz/LumiLivre?type=design&node-id=15-252&mode=design",
      },
      start: "November 2023",
      end: "Ongoing", // Update the end date if the project is completed
    },
    {
      title: "Classification of Hand Signs (ASL)",
      techStack: ["Machine Learning", "Python", "Data Preprocessing", "Convolutional Neural Networks", "Random Forests"],
      description:
        "Curated a dataset of over 34,000 images of American Sign Language hand signs, ensuring diversity and comprehensiveness. Developed a preprocessing pipeline to clean and standardize data, enhancing model training efficacy. Trained and evaluated machine learning models, including convolutional neural networks and random forests, for accurate classification of hand signs. Skills: Machine Learning, Python, Data Preprocessing, Convolutional Neural Networks, Random Forests, Model Evaluation",
      logo: ConsultlyLogo, // Replace with the actual project logo if available
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
    logo: ConsultlyLogo, // Replace with the actual project logo if available
    link: {
      label: "View Analysis", // Replace with the actual project link if available
      href: "https://docs.google.com/presentation/d/1J2HRfOLJb_ycDSfW1oGl6oLFI00LqoUngGkf2IhwNDM/edit?usp=sharing", // Direct link to your project or related presentation
    },
    start: "June 2022", 
    end: "August 2022", 
  },
  ],
} as const;
