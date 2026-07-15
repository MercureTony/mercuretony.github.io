import matter from 'gray-matter'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { getArticleSlugs, readArticle } from '@/lib/articles'

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

export default async function WritingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Writings');

  const posts: BlogPost[] = getArticleSlugs().map((slug) => {
    const { content } = readArticle(slug, locale);
    const { data } = matter(content);
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const dateLocale = locale === 'fr' ? 'fr-CA' : 'en-CA';

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <h1 className="text-2xl font-bold mb-4">{t('heading')}</h1>

      <p className="mb-6">
        {t('intro')}
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4 last:border-b-0 border-neutral-800 mb-4 last:mb-0">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/writings/${post.slug}`} className="text-neutral-400 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-2">{new Date(post.date).toLocaleDateString(dateLocale)}</p>
            {post.summary && <p>{post.summary}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}