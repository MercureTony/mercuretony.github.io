import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/MDXComponents'
import matter from 'gray-matter'
import { Link } from '@/i18n/navigation'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getArticleSlugs, readArticle } from '@/lib/articles'

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const { content } = readArticle(slug, locale)
  const { data } = matter(content)

  return {
    title: `${data.title} | Anthony Uyende`,
    description: data.summary || "An article by Anthony Uyende",
  }
}

export default async function BlogPost({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const t = await getTranslations('Writings')
  const { content } = readArticle(slug, locale)
  const { content: body, data } = matter(content)

  const dateLocale = locale === 'fr' ? 'fr-CA' : 'en-CA'

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-34">
      <Link href="/writings" className="text-neutral-300 hover:underline mb-4 inline-block">
        {t('backToWritings')}
      </Link>

      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>

      <p className="text-gray-600 text-sm mb-6">{t('publishedOn', { date: new Date(data.date).toLocaleDateString(dateLocale) })}</p>

      <article className="prose lg:prose-xl pb-16 prose-img:rounded-lg prose-img:shadow-lg prose-img:border prose-img:border-neutral-200 prose-img:mb-4">
        <MDXRemote source={body} components={mdxComponents} />
      </article>
    </div>
  )
}
