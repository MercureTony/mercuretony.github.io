export interface Book {
  title: string;
  author: string;
  url?: string;
  startDate?: string;  // Optional: track when you started reading
  progress?: number;   // Optional: track reading progress (0-100)
}

export const currentlyReading: Book = {
  title: "Start with Why",
  author: "Simon Sinek",
  url: "https://simonsinek.com/books/start-with-why/",
  startDate: "2025-01-15",
  progress: 45
};

export const recentlyRead: Book[] = [
  {
    title: "Zero to One",
    author: "Peter Thiel",
    url: "https://www.goodreads.com/book/show/18050143-zero-to-one"
  },
  // Add more books as you finish them
]; 