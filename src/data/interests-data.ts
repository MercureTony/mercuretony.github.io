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
    category: "Technology & AI",
    description: "Areas where I focus my technical expertise and research",
    items: [
      {
        name: "Artificial Intelligence",
        description: "Particularly interested in LLMs and their applications in business decision-making"
      },
      {
        name: "Agentic Workflows & AI Infrastructure",
        description: "Multi-agent systems, LLM-based reasoning, autonomous coordination, and orbital compute"
      }
    ]
  },
  {
    category: "Cryptocurrency & Blockchain",
    description: "Exploring the future of finance and decentralized systems",
    items: [
      {
        name: "Stablecoins",
        description: "Digital currencies designed for price stability and financial innovation",
        resources: [
          {
            title: "Ripple USD: Stable, transparent, trusted stablecoin",
            url: "https://ripple.com/solutions/stablecoin/",
            type: "article",
            date: "2024"
          }
        ]
      }
    ]
  },
  {
    category: "Hardware & Electronics",
    description: "Physical computing and electronic systems development",
    items: [
      {
        name: "Embedded Systems",
        description: "Design and development of embedded hardware solutions"
      }
    ]
  },
  {
    category: "Sustainable Agriculture",
    description: "Modern approaches to efficient and sustainable food production",
    items: [
      {
        name: "Precision Agriculture",
        description: "Data-driven farming techniques and technologies"
      },
      {
        name: "Vertical Farming",
        description: "Urban agriculture solutions and controlled environment farming"
      }
    ]
  },
  {
    category: "Economics & Politics",
    description: "Study of economic systems and political philosophy",
    items: [
      {
        name: "Economic Freedom",
        description: "Impact of free markets and limited government intervention",
        resources: [
          {
            title: "Javier Milei: President of Argentina on Freedom, Economics & Corruption",
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
    category: "Renewable Energy",
    description: "Sustainable energy solutions for a cleaner future",
    items: [
      {
        name: "Solar Technology",
        description: "Advancements in photovoltaic systems and solar energy storage"
      },
      {
        name: "Energy Abundance & Fusion Power",
        description: "From plasma physics to small modular reactors and geothermal scalability",
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
      }
    ]
  },
  {
    category: "Frontier Science & Systems",
    description: "Exploring the edges of science, technology, civilization, and consciousness",
    items: [
      {
        name: "Synthetic Biology & Organoid Intelligence",
        description: "Reprogramming biology for healing, computing, and longevity breakthroughs"
      },
      {
        name: "Geoengineering & Climate Systems",
        description: "Scalable technologies for reversing climate change and planetary management"
      },
      {
        name: "Quantum & Neuromorphic Computing",
        description: "New substrates for intelligence: optical, quantum, analog, brain-like chips"
      },
      {
        name: "AI-Governed Cities & Post-Capitalist Systems",
        description: "Exploring automated local governance, DAO models, and financial OS for civilization"
      },
      {
        name: "Weird but Real",
        description: "Consciousness studies, dream programming, simulation theory, and information physics"
      }
    ]
  }
]; 