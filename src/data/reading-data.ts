export interface Reading {
    title: string;
    author: string;
    type: 'Book' | 'Article' | 'Paper' | 'Blog' | 'Other';
    description: string;
    url?: string;
    isSpecial?: boolean;
  }
  
  export interface Topic {
    name: string;
    readings: Reading[];
  }
  
  export const topics: Topic[] = [
    {
      name: "Business & Entrepreneurship",
      readings: [
        {
          title: "Zero to One",
          author: "Peter Thiel",
          type: "Book",
          description: "Notes on startups, or how to build the future. This book offers a new way of thinking about innovation.",
        },
        {
          title: "The Lean Startup",
          author: "Eric Ries",
          type: "Book",
          description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        },
        {
          title: "Paul Graham's Essays",
          author: "Paul Graham",
          type: "Blog",
          description: "Insightful essays on startups, programming, and life by the co-founder of Y Combinator.",
          url: "http://www.paulgraham.com/articles.html",
        },
      ]
    },
    {
      name: "Technology & AI",
      readings: [
        {
          title: "Artificial Intelligence: A Modern Approach",
          author: "Stuart Russell and Peter Norvig",
          type: "Book",
          description: "The leading textbook in Artificial Intelligence, used in over 1400 universities in over 125 countries.",
        },
        {
          title: "Sam Altman's Blog",
          author: "Sam Altman",
          type: "Blog",
          description: "Insights on technology, startups, and entrepreneurship from the CEO of OpenAI.",
          url: "https://blog.samaltman.com/",
        },
      ]
    },
    {
      name: "Personal Development & Habits",
      readings: [
        {
          title: "Start with Why",
          author: "Simon Sinek",
          type: "Book",
          description: "Explores how leaders can inspire cooperation, trust and change.",
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
          type: "Book",
          description: "An easy and proven way to build good habits and break bad ones.",
        },
        {
          title: "The Tao of Charlie Munger",
          author: "David Clark",
          type: "Book",
          description: "A compilation of quotes from Berkshire Hathaway's Vice Chairman on various aspects of life and business.",
        },
        {
          title: "Outliers",
          author: "Malcolm Gladwell",
          type: "Book",
          description: "An examination of the factors that contribute to high levels of success.",
        },
      ]
    },
    {
      name: "Marriage & Relationships",
      readings: [
        {
          title: "Sacred Marriage",
          author: "Gary Thomas",
          type: "Book",
          description: "Examines the spiritual dimension of marriage.",
        },
        {
          title: "What I Would Have Loved to Know Before Getting Married",
          author: "Gary Chapman",
          type: "Book",
          description: "Practical wisdom and insights for those preparing for marriage.",
        },
        {
          title: "Une fille, un gars, un Dieu",
          author: "Jean-Sébastien Morin",
          type: "Book",
          description: "Guide sur les relations amoureuses dans une perspective chrétienne.",
        },
        {
          title: "Jouir du choix de son conjoint",
          author: "ZTF",
          type: "Book",
          description: "Guide spirituel sur le choix du partenaire de vie.",
        },
      ]
    },
    {
      name: "Christian Living & Spirituality",
      readings: [
        {
          title: "Le chemin de la sanctification",
          author: "ZTF",
          type: "Book",
          description: "Exploration du processus de sanctification dans la vie chrétienne.",
        },
        {
          title: "Puissance par la prière",
          author: "Edward McKendree Bounds",
          type: "Book",
          description: "Un classique sur l'importance et la puissance de la prière.",
        },
        {
          title: "Le principe du trésor",
          author: "Randy Alcorn",
          type: "Book",
          description: "Exploration des principes bibliques sur la gestion des ressources.",
        },
        {
          title: "They Shall Expel Demons",
          author: "Derek Prince",
          type: "Book",
          description: "A comprehensive study on spiritual warfare and deliverance ministry.",
        },
        {
          title: "Le brisement des liens malsains",
          author: "Boniface Menye",
          type: "Book",
          description: "Guide sur la délivrance spirituelle et la rupture des liens négatifs.",
        },
        {
          title: "More Than a Carpenter",
          author: "Josh McDowell",
          type: "Book",
          description: "A compelling exploration of Jesus's claim to be more than a carpenter, examining historical evidence and personal testimonies.",
        },
        {
          title: "The Quest for Male Identity: Building men after God's heart",
          author: "Moïse Mahara",
          type: "Book",
          description: "A spiritual guide exploring biblical masculinity and how to develop a God-centered male identity.",
        },
      ]
    },
    {
      name: "Christian Apologetics & Evangelism",
      readings: [
        {
          title: "The Case for Christ",
          author: "Lee Strobel",
          type: "Book",
          description: "A journalist's personal investigation of the evidence for Jesus.",
        },
        {
          title: "Tactics: A Game Plan for Discussing Your Christian Convictions",
          author: "Gregory Koukl",
          type: "Book",
          description: "A practical guide for navigating conversations about faith and beliefs.",
        },
        {
          title: "Questions",
          author: "Werner Gitt",
          type: "Book",
          description: "Réponses aux questions fondamentales sur la foi et la science.",
        },
        {
          title: "God Has a Wonderful Plan for Your Life",
          author: "Ray Comfort",
          type: "Book",
          description: "A challenging look at the modern gospel message.",
        },
        {
          title: "Seeking Allah, Finding Jesus",
          author: "Nabeel Qureshi",
          type: "Book",
          description: "A personal account of a former Muslim's journey to Christianity.",
        },
        {
          title: "The Bible",
          author: "Various Authors",
          type: "Book",
          description: "The holy scripture of Christianity, containing the Old and New Testaments.",
          isSpecial: true,
        },
      ]
    },
    {
      name: "Science & Environment",
      readings: [
        {
          title: "Cosmic Queries",
          author: "Neil deGrasse Tyson",
          type: "Book",
          description: "Explores the fundamental questions about our universe and our place within it, covering topics from black holes to the search for alien life.",
        },
        {
          title: "Carbon Finance: The Financial Implications of Climate Change",
          author: "Sonia Labatt and Rodney R. White",
          type: "Book",
          description: "Explores the financial implications of climate change and the emerging market for carbon credits.",
        },
      ]
    },
  ];