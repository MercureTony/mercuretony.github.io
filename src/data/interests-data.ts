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
        description: "Particularly interested in LLMs and their applications in business decision-making",
        resources: [
          
        ]
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
    category: "Renewable Energy",
    description: "Sustainable energy solutions for a cleaner future",
    items: [
      {
        name: "Fusion Energy",
        description: "Next-generation clean energy technology",
        resources: [
          {
            title: "CFS to build first ARC fusion power plant in Virginia",
            url: "https://blog.cfs.energy/cfs-will-build-its-first-arc-fusion-power-plant-in-virginia/",
            type: "article",
            date: "2024"
          }
        ]
      },
      {
        name: "Solar Technology",
        description: "Advancements in photovoltaic systems and solar energy storage"
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
  }
]; 