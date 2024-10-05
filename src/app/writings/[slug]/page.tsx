import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/MDXComponents'
import matter from 'gray-matter'
import Link from 'next/link'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/articles')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/articles', `${params.slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/writings" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Writings
      </Link>
      
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      
      <p className="text-gray-600 text-sm mb-6">Published on {new Date(data.date).toLocaleDateString()}</p>
      
      <article className="prose lg:prose-xl">
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </div>
  )
}
