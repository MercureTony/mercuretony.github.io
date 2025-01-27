interface Challenge {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'reading' | 'fitness' | 'coding' | 'writing' | 'other';
  status: 'ongoing' | 'completed' | 'failed';
  goal: {
    target: number;
    current: number;
    unit: string;
  };
  entries: ChallengeEntry[];
}

interface ChallengeEntry {
  title: string;
  date: string;
  description?: string;
  metadata?: {
    coverUrl?: string;
    author?: string;
    url?: string;
    [key: string]: any;
  };
}

export const challenges2025: Challenge[] = [
  {
    title: "52 Books Challenge",
    description: "Reading one book every week throughout 2025",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    type: "reading",
    status: "ongoing",
    goal: {
      target: 52,
      current: 0,
      unit: "books"
    },
    entries: [
      {
        title: "Zero to One",
        date: "2025-01-07",
        description: "Notes on startups, or how to build the future",
        metadata: {
          author: "Peter Thiel",
          coverUrl: "https://images-na.ssl-images-amazon.com/images/P/0804139296.01.L.jpg",
          url: "https://www.amazon.com/dp/0804139296"
        }
      }
    ]
  },
  {
    title: "Open Source Contributions",
    description: "Contributing to one open source project every month",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    type: "coding",
    status: "ongoing",
    goal: {
      target: 12,
      current: 0,
      unit: "contributions"
    },
    entries: []
  }
  // Add more challenges as you create them
]; 