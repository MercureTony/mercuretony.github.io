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

export const INTERESTS_DATA: Interest[] = [
  {
    category: "Company Building",
    description: "How companies get built, funded, and grown.",
    items: [
      {
        name: "Startups and Entrepreneurship",
        description:
          "Building from zero, finding markets, founder-led sales, category creation, and the psychology of persistence."
      },
      {
        name: "Vertical Software",
        description:
          "Software built for specific industries where workflows are complex, trust matters, and generic tools fall short."
      },
      {
        name: "Venture Capital and Economic Development",
        description:
          "How capital, talent, institutions, and technology shape the growth of companies and regions."
      }
    ]
  },
  {
    category: "Technology and AI",
    description: "Where I focus my technical work and research.",
    items: [
      {
        name: "Artificial Intelligence",
        description:
          "LLMs, agentic systems, AI infrastructure, and practical applications of AI inside real business workflows."
      },
      {
        name: "Data Infrastructure",
        description:
          "How information moves through organizations, how teams make decisions, and how software turns messy data into useful systems."
      },
      {
        name: "Human-in-the-Loop AI",
        description:
          "AI systems where humans remain responsible for judgment, review, and final decisions, especially in professional services."
      }
    ]
  },
  {
    category: "Civilization-Scale Systems",
    description: "The larger systems that shape how societies grow.",
    items: [
      {
        name: "Energy Abundance",
        description:
          "Renewable energy, nuclear power, geothermal systems, and the role of cheap energy in economic progress.",
        resources: [
          {
            title: "CFS to build first ARC fusion power plant in Virginia",
            url: "https://blog.cfs.energy/cfs-will-build-its-first-arc-fusion-power-plant-in-virginia/",
            type: "article",
            date: "2024"
          },
          {
            title: "Why Fusion is Closer Than You Think",
            url: "https://www.helionenergy.com/",
            type: "article",
            date: "2024"
          }
        ]
      },
      {
        name: "Climate and Agriculture",
        description:
          "Sustainable agriculture, precision farming, food systems, and technologies that improve resilience."
      },
      {
        name: "Economics and Politics",
        description:
          "Economic growth, institutions, markets, governance, and how societies organize themselves to create opportunity.",
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
              "Implemented major deregulation and structural reforms"
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Speculative Curiosities",
    description:
      "Not all active projects. Some are serious research interests, some are long-term curiosities, and some simply help me think more broadly.",
    items: [
      {
        name: "Frontier Science and Long-Term Futures",
        description:
          "Frontier science, synthetic biology, quantum computing, consciousness, and long-term futures."
      }
    ]
  }
];
