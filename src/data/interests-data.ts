export interface Resource {
  title: string;
  url: string;
  type: "article" | "paper" | "video" | "book" | "interview";
  date: string;
  key_points?: string[];
}

export interface InterestItem {
  name: string;
  description?: string;
  link?: string;
  resources?: Resource[];
}

export interface Interest {
  category: string;
  description: string;
  items: InterestItem[];
}

type Locale = "en" | "fr";
type L = Record<Locale, string>;

interface RawItem {
  name: L;
  description: L;
  resources?: Resource[];
}

interface RawInterest {
  category: L;
  description: L;
  items: RawItem[];
}

const RAW: RawInterest[] = [
  {
    category: { en: "Company Building", fr: "Bâtir des entreprises" },
    description: {
      en: "How companies get built, funded, and grown.",
      fr: "Comment les entreprises se bâtissent, se financent et croissent.",
    },
    items: [
      {
        name: {
          en: "Startups and Entrepreneurship",
          fr: "Startups et entrepreneuriat",
        },
        description: {
          en: "Building from zero, finding markets, founder-led sales, category creation, and the psychology of persistence.",
          fr: "Bâtir à partir de zéro, trouver des marchés, la vente menée par les fondateurs, la création de catégories et la psychologie de la persévérance.",
        },
      },
      {
        name: { en: "Vertical Software", fr: "Logiciels verticaux" },
        description: {
          en: "Software built for specific industries where workflows are complex, trust matters, and generic tools fall short.",
          fr: "Des logiciels conçus pour des secteurs précis où les processus sont complexes, où la confiance compte et où les outils génériques ne suffisent pas.",
        },
      },
      {
        name: {
          en: "Venture Capital and Economic Development",
          fr: "Capital-risque et développement économique",
        },
        description: {
          en: "How capital, talent, institutions, and technology shape the growth of companies and regions.",
          fr: "Comment le capital, le talent, les institutions et la technologie façonnent la croissance des entreprises et des régions.",
        },
      },
    ],
  },
  {
    category: { en: "Technology and AI", fr: "Technologie et IA" },
    description: {
      en: "Where I focus my technical work and research.",
      fr: "Là où je concentre mon travail technique et mes recherches.",
    },
    items: [
      {
        name: { en: "Artificial Intelligence", fr: "Intelligence artificielle" },
        description: {
          en: "LLMs, agentic systems, AI infrastructure, and practical applications of AI inside real business workflows.",
          fr: "Les grands modèles de langage, les systèmes agentiques, l'infrastructure de l'IA et les applications concrètes de l'IA dans les processus d'affaires réels.",
        },
      },
      {
        name: { en: "Data Infrastructure", fr: "Infrastructure de données" },
        description: {
          en: "How information moves through organizations, how teams make decisions, and how software turns messy data into useful systems.",
          fr: "Comment l'information circule dans les organisations, comment les équipes prennent des décisions et comment les logiciels transforment des données désordonnées en systèmes utiles.",
        },
      },
      {
        name: { en: "Human-in-the-Loop AI", fr: "IA avec supervision humaine" },
        description: {
          en: "AI systems where humans remain responsible for judgment, review, and final decisions, especially in professional services.",
          fr: "Des systèmes d'IA où les humains demeurent responsables du jugement, de la révision et des décisions finales, en particulier dans les services professionnels.",
        },
      },
    ],
  },
  {
    category: {
      en: "Civilization-Scale Systems",
      fr: "Systèmes à l'échelle de la civilisation",
    },
    description: {
      en: "The larger systems that shape how societies grow.",
      fr: "Les grands systèmes qui façonnent la croissance des sociétés.",
    },
    items: [
      {
        name: { en: "Energy Abundance", fr: "Abondance énergétique" },
        description: {
          en: "Renewable energy, nuclear power, geothermal systems, and the role of cheap energy in economic progress.",
          fr: "L'énergie renouvelable, le nucléaire, la géothermie et le rôle de l'énergie bon marché dans le progrès économique.",
        },
        resources: [
          {
            title: "CFS to build first ARC fusion power plant in Virginia",
            url: "https://blog.cfs.energy/cfs-will-build-its-first-arc-fusion-power-plant-in-virginia/",
            type: "article",
            date: "2024",
          },
          {
            title: "Why Fusion is Closer Than You Think",
            url: "https://www.helionenergy.com/",
            type: "article",
            date: "2024",
          },
        ],
      },
      {
        name: { en: "Climate and Agriculture", fr: "Climat et agriculture" },
        description: {
          en: "Sustainable agriculture, precision farming, food systems, and technologies that improve resilience.",
          fr: "L'agriculture durable, l'agriculture de précision, les systèmes alimentaires et les technologies qui améliorent la résilience.",
        },
      },
      {
        name: { en: "Economics and Politics", fr: "Économie et politique" },
        description: {
          en: "Economic growth, institutions, markets, governance, and how societies organize themselves to create opportunity.",
          fr: "La croissance économique, les institutions, les marchés, la gouvernance et la façon dont les sociétés s'organisent pour créer des opportunités.",
        },
        resources: [
          {
            title:
              "Javier Milei: President of Argentina on Freedom, Economics & Corruption",
            url: "https://lexfridman.com/javier-milei-transcript/",
            type: "interview",
            date: "2024",
            key_points: [
              "Achieved 15% GDP fiscal adjustment in Argentina",
              "Reduced inflation from potential 17,000% to ~30% annually",
              "Implemented major deregulation and structural reforms",
            ],
          },
        ],
      },
      {
        name: { en: "The Informal Economy", fr: "L'économie informelle" },
        description: {
          en: "Around 2 billion people, roughly 60% of the world's workforce, earn a living outside formal registration, taxation, and labor protection, generating an estimated $10-20 trillion a year. As mobile money, digital payments, and AI make it easier to bring small merchants into the formal system, this becomes one of the largest economic-transformation opportunities of the coming decades, especially across Africa.",
          fr: "Environ 2 milliards de personnes, soit près de 60 % de la main-d'œuvre mondiale, gagnent leur vie en dehors de l'enregistrement officiel, de la fiscalité et de la protection du travail, générant entre 10 000 et 20 000 milliards de dollars par année. À mesure que l'argent mobile, les paiements numériques et l'IA facilitent l'intégration des petits commerçants au système formel, cela devient l'une des plus grandes occasions de transformation économique des prochaines décennies, particulièrement en Afrique.",
        },
      },
    ],
  },
  {
    category: { en: "Speculative Curiosities", fr: "Curiosités spéculatives" },
    description: {
      en: "Not all active projects. Some are serious research interests, some are long-term curiosities, and some simply help me think more broadly.",
      fr: "Ce ne sont pas tous des projets actifs. Certains sont de sérieux sujets de recherche, d'autres des curiosités à long terme, et d'autres m'aident simplement à penser plus largement.",
    },
    items: [
      {
        name: {
          en: "Frontier Science and Long-Term Futures",
          fr: "Science de pointe et avenirs à long terme",
        },
        description: {
          en: "Frontier science, synthetic biology, quantum computing, consciousness, and long-term futures.",
          fr: "La science de pointe, la biologie synthétique, l'informatique quantique, la conscience et les avenirs à long terme.",
        },
      },
    ],
  },
];

export function getInterests(locale: string): Interest[] {
  const l: Locale = locale === "fr" ? "fr" : "en";
  return RAW.map((interest) => ({
    category: interest.category[l],
    description: interest.description[l],
    items: interest.items.map((item) => ({
      name: item.name[l],
      description: item.description[l],
      resources: item.resources,
    })),
  }));
}
