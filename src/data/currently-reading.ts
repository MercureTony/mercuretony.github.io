export interface CurrentBook {
	title: string;
	author: string;
	amazonUrl: string;
}

export const currentBook: CurrentBook | null = {
	title: "Man's Search for Meaning",
	author: "Viktor E. Frankl",
	amazonUrl:
		"https://www.amazon.ca/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273",
};
