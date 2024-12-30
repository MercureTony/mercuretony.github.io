export interface Book {
  title: string;
  author: string;
  url?: string;
  startDate?: string;  // Optional: track when you started reading
  progress?: number;   // Optional: track reading progress (0-100)
}

export const currentlyReading: Book = {
  title: "THE QUEST FOR MALE IDENTITY : Building men after God’s heart",
  author: "Moïse Mahara",
  url: "https://www.amazon.ca/Mo%C3%AFse-Mahara-Moukene-ebook/dp/B0D2SFZL22?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.o4xcgCWx9sBxxYDai712SauvyBautLB9cUhPIW1Ba3uKEE9YFC2nO-Krr3q4Ylm6BK_nOV6WrsV7Oyvcc4FDy3vsw1yhc73BP2xArRtH7KR1r1yv6f42QI-ELszjLfx2MgkVXo0OZgZP9FoQbCBPfMJUNWehWE6drEr8_tNH_rw.pN6nIrcTAQRVQ4KkZV_wdQYy8O1LscPpAvZ6OOxDUQI&dib_tag=AUTHOR",
  startDate: "2024-03-15",
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