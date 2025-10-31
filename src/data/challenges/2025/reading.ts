interface ReadingChallenge {
	year: number;
	goal: {
		books: number;
		timeframe: string;
	};
	progress: number;
	books: Book[];
}

interface Book {
	title: string;
	author: string;
	coverUrl: string;
	amazonUrl: string;
	dateStarted: string;
	dateFinished?: string;
	status: "reading" | "completed" | "abandoned";
	weekNumber: number;
	rating?: number; // 1-5 stars
	review?: {
		text: string;
		pros?: string[];
		cons?: string[];
		recommendedFor?: string;
	};
}

export const reading2025: Book[] = [
	{
		title: "La quête de l'identité masculine",
		author: "Moïse Mahara Moukene",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/2982233509.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/-/fr/qu%C3%AAte-lidentit%C3%A9-masculine-B%C3%A2tir-hommes/dp/2982233509",
		dateStarted: "2025-01-01",
		dateFinished: "2025-01-07",
		status: "completed",
		weekNumber: 1,
		rating: 4,
		review: {
			text: "A profound exploration of biblical masculinity. The author presents a clear roadmap for men seeking to understand their identity in Christ.",
			pros: [
				"Clear biblical foundation",
				"Practical applications",
				"Well-structured content",
			],
			recommendedFor:
				"Christian men seeking to understand their role and identity",
		},
	},
	{
		title: "More Than a Carpenter",
		author: "Josh McDowell",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/1414326270.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/-/fr/More-Than-Carpenter-Josh-McDowell/dp/1414326270",
		dateStarted: "2025-01-08",
		dateFinished: "2025-01-14",
		status: "completed",
		weekNumber: 2,
	},
	{
		title: "Start with Why",
		author: "Simon Sinek",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/1591846447.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/-/fr/Start-Why-Leaders-Inspire-Everyone/dp/1591846447",
		dateStarted: "2025-01-15",
		dateFinished: "2025-01-21",
		status: "completed",
		weekNumber: 3,
	},
	{
		title: "Comment réussir dans la vie Chrétienne",
		author: "ZTF",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/B08RGYSX5R.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/-/fr/Comment-r%C3%A9ussir-dans-vie-Chr%C3%A9tienne/dp/B08RGYSX5R",
		dateStarted: "2025-01-22",
		dateFinished: "2025-01-28",
		status: "completed",
		weekNumber: 4,
	},
	{
		title: "Psychology of Money",
		author: "Morgan Housel",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/0857197681.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/-/fr/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
		dateStarted: "2025-01-15",
		dateFinished: "2025-01-29",
		status: "completed",
		weekNumber: 5,
	},
	{
		title: "Un Mariage Réussi: Le Chef D'œuvre du Mari",
		author: "Zacharias Tanee Fomum",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/B00LXKYYDU.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/-/fr/Zacharias-Tanee-Fomum-ebook/dp/B00LXKYYDU",
		dateStarted: "2025-01-29",
		dateFinished: "2025-02-10",
		status: "completed",
		weekNumber: 6,
	},
	{
		title: "Pattern Breakers: Why Some Start-Ups Change the Future",
		author: "Mike Maples Jr, Peter Ziebelman",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/1541704355.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/Pattern-Breakers-Start-Ups-Change-Future/dp/1541704355/",
		dateStarted: "2025-02-10",
		dateFinished: "2025-10-30",
		status: "completed",
		weekNumber: 7,
	},
	{
		title: "The Infinite Game",
		author: "Simon Sinek",
		coverUrl:
			"https://images-na.ssl-images-amazon.com/images/P/073521350X.01.L.jpg",
		amazonUrl:
			"https://www.amazon.ca/Infinite-Game-Simon-Sinek/dp/073521350X",
		dateStarted: "2025-10-31",
		status: "reading",
		weekNumber: 44,
	},
];
