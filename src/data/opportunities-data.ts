export interface Opportunity {
  id: string;
  title: string;
  description: string;
  type: 'looking' | 'offering' | 'collaboration';
  status: 'active' | 'closed';
  date: string;
  tags: string[];
  contact?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const OPPORTUNITIES_DATA: Opportunity[] = [
  {
    id: "cto-2024",
    title: "Looking for CTO Co-founder",
    description: "Seeking a technical co-founder for Coalesc. Must be passionate about AI and finance, with experience in building scalable systems.",
    type: "looking",
    status: "active",
    date: "2024-02",
    tags: ["startup", "AI", "fintech", "co-founder"],
    contact: {
      linkedin: "https://linkedin.com/in/anthonyuy",
      twitter: "https://twitter.com/anthonyuy_"
    }
  }
]; 