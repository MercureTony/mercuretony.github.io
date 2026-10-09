import { Home } from "@/components/home";
import { getArticles } from "@/lib/articles";

// The page itself runs on the server so it can read the essays' frontmatter;
// the "New today." moment needs their dates in the browser.
export default function Page() {
	return <Home articles={getArticles()} />;
}
