import type { Interest } from "./interests-data";

export const INTERESTS_DATA_FR: Interest[] = [
  {
    category: "Création d’entreprise",
    description: "Comment les entreprises se construisent, se financent et grandissent.",
    items: [
      {
        name: "Startups et entrepreneuriat",
        description:
          "Partir de zéro, trouver un marché, vendre en tant que fondateur, créer une catégorie et comprendre la psychologie de la persévérance.",
      },
      {
        name: "Logiciels verticaux",
        description:
          "Des logiciels conçus pour des secteurs précis où les flux de travail sont complexes, où la confiance compte et où les outils génériques montrent leurs limites.",
      },
      {
        name: "Capital-risque et développement économique",
        description:
          "Comment le capital, les talents, les institutions et la technologie influencent la croissance des entreprises et des régions.",
      },
    ],
  },
  {
    category: "Technologie et IA",
    description: "Les domaines où je concentre mon travail technique et mes recherches.",
    items: [
      {
        name: "Intelligence artificielle",
        description:
          "LLM, systèmes agentiques, infrastructure IA et applications concrètes de l’IA dans de vrais flux de travail.",
      },
      {
        name: "Infrastructure de données",
        description:
          "Comment l’information circule dans les organisations, comment les équipes prennent des décisions et comment les logiciels transforment des données désordonnées en systèmes utiles.",
      },
      {
        name: "IA avec humain dans la boucle",
        description:
          "Des systèmes d’IA où les humains restent responsables du jugement, de la révision et de la décision finale, surtout dans les services professionnels.",
      },
    ],
  },
  {
    category: "Systèmes à l’échelle de la civilisation",
    description: "Les grands systèmes qui influencent la manière dont les sociétés se développent.",
    items: [
      {
        name: "Abondance énergétique",
        description:
          "Énergies renouvelables, nucléaire, géothermie et rôle d’une énergie bon marché dans le progrès économique.",
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
        name: "Climat et agriculture",
        description:
          "Agriculture durable, agriculture de précision, systèmes alimentaires et technologies qui améliorent la résilience.",
      },
      {
        name: "Économie et politique",
        description:
          "Croissance économique, institutions, marchés, gouvernance et manière dont les sociétés s’organisent pour créer des opportunités.",
        resources: [
          {
            title: "Javier Milei: President of Argentina on Freedom, Economics & Corruption",
            url: "https://lexfridman.com/javier-milei-transcript/",
            type: "interview",
            date: "2024",
            key_points: [
              "Ajustement budgétaire de 15 % du PIB en Argentine",
              "Réduction de l’inflation d’un scénario potentiel de 17 000 % à environ 30 % par an",
              "Importantes réformes de déréglementation et réformes structurelles",
            ],
          },
        ],
      },
      {
        name: "L’économie informelle",
        description:
          "Environ 2 milliards de personnes, soit près de 60 % de la main-d’œuvre mondiale, gagnent leur vie en dehors de l’enregistrement formel, de la fiscalité et des protections du travail, pour une activité estimée entre 10 000 et 20 000 milliards de dollars par an. À mesure que l’argent mobile, les paiements numériques et l’IA facilitent l’intégration des petits commerçants dans l’économie formelle, cela devient l’une des plus grandes occasions de transformation économique des prochaines décennies, surtout en Afrique.",
      },
    ],
  },
  {
    category: "Curiosités spéculatives",
    description:
      "Ce ne sont pas toutes des activités en cours. Certaines sont des sujets de recherche sérieux, d’autres des curiosités de long terme, et certaines m’aident simplement à penser plus largement.",
    items: [
      {
        name: "Science de pointe et futurs de long terme",
        description:
          "Science de pointe, biologie synthétique, informatique quantique, conscience et futurs de long terme.",
      },
    ],
  },
];
