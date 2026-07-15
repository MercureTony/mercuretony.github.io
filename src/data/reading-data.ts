export interface Reading {
    title: string;
    author: string;
    type: string;
    description: string;
    url?: string;
    isSpecial?: boolean;
  }

  export interface Topic {
    name: string;
    readings: Reading[];
  }

  type Localized = {
    en: string;
    fr: string;
  };

  type ReadingType = 'Book' | 'Article' | 'Paper' | 'Blog' | 'Other';

  interface RawReading {
    title: string;
    author: string;
    type: ReadingType;
    description: Localized;
    url?: string;
    isSpecial?: boolean;
  }

  interface RawTopic {
    name: Localized;
    readings: RawReading[];
  }

  const typeLabels: Record<ReadingType, Localized> = {
    Book: { en: "Book", fr: "Livre" },
    Article: { en: "Article", fr: "Article" },
    Paper: { en: "Paper", fr: "Article scientifique" },
    Blog: { en: "Blog", fr: "Blogue" },
    Other: { en: "Other", fr: "Autre" },
  };

  const rawTopics: RawTopic[] = [
    {
      name: { en: "Business & Entrepreneurship", fr: "Affaires et entrepreneuriat" },
      readings: [
        {
          title: "Zero to One",
          author: "Peter Thiel",
          type: "Book",
          description: {
            en: "Notes on startups, or how to build the future. This book offers a new way of thinking about innovation.",
            fr: "Des réflexions sur les startups, ou comment bâtir l'avenir. Ce livre propose une nouvelle façon de penser l'innovation.",
          },
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          type: "Book",
          description: {
            en: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
            fr: "Comment les entrepreneurs d'aujourd'hui misent sur l'innovation continue pour créer des entreprises extrêmement prospères.",
          },
        },
        {
          title: "Paul Graham's Essays",
          author: "Paul Graham",
          type: "Blog",
          description: {
            en: "Insightful essays on startups, programming, and life by the co-founder of Y Combinator.",
            fr: "Des essais pertinents sur les startups, la programmation et la vie, signés par le cofondateur de Y Combinator.",
          },
          url: "http://www.paulgraham.com/articles.html",
        },
      ],
    },
    {
      name: { en: "Technology & AI", fr: "Technologie et IA" },
      readings: [
        {
          title: "Artificial Intelligence: A Modern Approach",
          author: "Stuart Russell and Peter Norvig",
          type: "Book",
          description: {
            en: "The leading textbook in Artificial Intelligence, used in over 1400 universities in over 125 countries.",
            fr: "Le manuel de référence en intelligence artificielle, utilisé dans plus de 1400 universités réparties dans plus de 125 pays.",
          },
        },
        {
          title: "Sam Altman's Blog",
          author: "Sam Altman",
          type: "Blog",
          description: {
            en: "Insights on technology, startups, and entrepreneurship from the CEO of OpenAI.",
            fr: "Des réflexions sur la technologie, les startups et l'entrepreneuriat par le PDG d'OpenAI.",
          },
          url: "https://blog.samaltman.com/",
        },
      ],
    },
    {
      name: { en: "Personal Development & Habits", fr: "Développement personnel et habitudes" },
      readings: [
        {
          title: "Start with Why",
          author: "Simon Sinek",
          type: "Book",
          description: {
            en: "Explores how leaders can inspire cooperation, trust and change.",
            fr: "Explore comment les leaders peuvent susciter la coopération, la confiance et le changement.",
          },
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
          type: "Book",
          description: {
            en: "An easy and proven way to build good habits and break bad ones.",
            fr: "Une méthode simple et éprouvée pour adopter de bonnes habitudes et se défaire des mauvaises.",
          },
        },
        {
          title: "The Tao of Charlie Munger",
          author: "David Clark",
          type: "Book",
          description: {
            en: "A compilation of quotes from Berkshire Hathaway's Vice Chairman on various aspects of life and business.",
            fr: "Un recueil de citations du vice-président de Berkshire Hathaway portant sur divers aspects de la vie et des affaires.",
          },
        },
        {
          title: "Outliers",
          author: "Malcolm Gladwell",
          type: "Book",
          description: {
            en: "An examination of the factors that contribute to high levels of success.",
            fr: "Une analyse des facteurs qui contribuent à atteindre de hauts niveaux de réussite.",
          },
        },
      ],
    },
    {
      name: { en: "Marriage & Relationships", fr: "Mariage et relations" },
      readings: [
        {
          title: "Sacred Marriage",
          author: "Gary Thomas",
          type: "Book",
          description: {
            en: "Examines the spiritual dimension of marriage.",
            fr: "Examine la dimension spirituelle du mariage.",
          },
        },
        {
          title: "What I Would Have Loved to Know Before Getting Married",
          author: "Gary Chapman",
          type: "Book",
          description: {
            en: "Practical wisdom and insights for those preparing for marriage.",
            fr: "Une sagesse pratique et des conseils éclairants pour les personnes qui se préparent au mariage.",
          },
        },
        {
          title: "Une fille, un gars, un Dieu",
          author: "Jean-Sébastien Morin",
          type: "Book",
          description: {
            en: "A guide to romantic relationships from a Christian perspective.",
            fr: "Guide sur les relations amoureuses dans une perspective chrétienne.",
          },
        },
        {
          title: "Jouir du choix de son conjoint",
          author: "ZTF",
          type: "Book",
          description: {
            en: "A spiritual guide to choosing your life partner.",
            fr: "Guide spirituel sur le choix du partenaire de vie.",
          },
        },
      ],
    },
    {
      name: { en: "Christian Living & Spirituality", fr: "Vie chrétienne et spiritualité" },
      readings: [
        {
          title: "Le chemin de la sanctification",
          author: "ZTF",
          type: "Book",
          description: {
            en: "An exploration of the process of sanctification in the Christian life.",
            fr: "Exploration du processus de sanctification dans la vie chrétienne.",
          },
        },
        {
          title: "Puissance par la prière",
          author: "Edward McKendree Bounds",
          type: "Book",
          description: {
            en: "A classic on the importance and power of prayer.",
            fr: "Un classique sur l'importance et la puissance de la prière.",
          },
        },
        {
          title: "Le principe du trésor",
          author: "Randy Alcorn",
          type: "Book",
          description: {
            en: "An exploration of biblical principles for managing resources.",
            fr: "Exploration des principes bibliques sur la gestion des ressources.",
          },
        },
        {
          title: "They Shall Expel Demons",
          author: "Derek Prince",
          type: "Book",
          description: {
            en: "A comprehensive study on spiritual warfare and deliverance ministry.",
            fr: "Une étude approfondie sur le combat spirituel et le ministère de délivrance.",
          },
        },
        {
          title: "Le brisement des liens malsains",
          author: "Boniface Menye",
          type: "Book",
          description: {
            en: "A guide to spiritual deliverance and breaking negative bonds.",
            fr: "Guide sur la délivrance spirituelle et la rupture des liens négatifs.",
          },
        },
        {
          title: "More Than a Carpenter",
          author: "Josh McDowell",
          type: "Book",
          description: {
            en: "A compelling exploration of Jesus's claim to be more than a carpenter, examining historical evidence and personal testimonies.",
            fr: "Une exploration captivante de l'affirmation de Jésus d'être plus qu'un charpentier, à travers l'examen des preuves historiques et des témoignages personnels.",
          },
        },
        {
          title: "The Quest for Male Identity: Building men after God's heart",
          author: "Moïse Mahara",
          type: "Book",
          description: {
            en: "A spiritual guide exploring biblical masculinity and how to develop a God-centered male identity.",
            fr: "Un guide spirituel qui explore la masculinité biblique et la façon de développer une identité masculine centrée sur Dieu.",
          },
        },
      ],
    },
    {
      name: { en: "Christian Apologetics & Evangelism", fr: "Apologétique chrétienne et évangélisation" },
      readings: [
        {
          title: "The Case for Christ",
          author: "Lee Strobel",
          type: "Book",
          description: {
            en: "A journalist's personal investigation of the evidence for Jesus.",
            fr: "L'enquête personnelle d'un journaliste sur les preuves concernant Jésus.",
          },
        },
        {
          title: "Tactics: A Game Plan for Discussing Your Christian Convictions",
          author: "Gregory Koukl",
          type: "Book",
          description: {
            en: "A practical guide for navigating conversations about faith and beliefs.",
            fr: "Un guide pratique pour aborder les conversations sur la foi et les croyances.",
          },
        },
        {
          title: "Questions",
          author: "Werner Gitt",
          type: "Book",
          description: {
            en: "Answers to fundamental questions about faith and science.",
            fr: "Réponses aux questions fondamentales sur la foi et la science.",
          },
        },
        {
          title: "God Has a Wonderful Plan for Your Life",
          author: "Ray Comfort",
          type: "Book",
          description: {
            en: "A challenging look at the modern gospel message.",
            fr: "Un regard interpellant sur le message de l'Évangile moderne.",
          },
        },
        {
          title: "Seeking Allah, Finding Jesus",
          author: "Nabeel Qureshi",
          type: "Book",
          description: {
            en: "A personal account of a former Muslim's journey to Christianity.",
            fr: "Le récit personnel du cheminement d'un ancien musulman vers le christianisme.",
          },
        },
        {
          title: "The Bible",
          author: "Various Authors",
          type: "Book",
          description: {
            en: "The holy scripture of Christianity, containing the Old and New Testaments.",
            fr: "L'Écriture sainte du christianisme, qui comprend l'Ancien et le Nouveau Testament.",
          },
          isSpecial: true,
        },
      ],
    },
    {
      name: { en: "Science & Environment", fr: "Science et environnement" },
      readings: [
        {
          title: "Cosmic Queries",
          author: "Neil deGrasse Tyson",
          type: "Book",
          description: {
            en: "Explores the fundamental questions about our universe and our place within it, covering topics from black holes to the search for alien life.",
            fr: "Explore les questions fondamentales sur notre univers et la place que nous y occupons, abordant des sujets allant des trous noirs à la recherche de vie extraterrestre.",
          },
        },
        {
          title: "Carbon Finance: The Financial Implications of Climate Change",
          author: "Sonia Labatt and Rodney R. White",
          type: "Book",
          description: {
            en: "Explores the financial implications of climate change and the emerging market for carbon credits.",
            fr: "Explore les répercussions financières des changements climatiques et le marché émergent des crédits de carbone.",
          },
        },
      ],
    },
  ];

  export function getTopics(locale: string): Topic[] {
    const lang: keyof Localized = locale === "fr" ? "fr" : "en";
    return rawTopics.map((topic) => ({
      name: topic.name[lang],
      readings: topic.readings.map((reading) => {
        const resolved: Reading = {
          title: reading.title,
          author: reading.author,
          type: typeLabels[reading.type][lang],
          description: reading.description[lang],
        };
        if (reading.url !== undefined) {
          resolved.url = reading.url;
        }
        if (reading.isSpecial !== undefined) {
          resolved.isSpecial = reading.isSpecial;
        }
        return resolved;
      }),
    }));
  }
