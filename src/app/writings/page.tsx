import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

export default function WritingsPage() {
  const postsDirectory = path.join(process.cwd(), 'src/content/articles')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts: BlogPost[] = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug: fileName.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      summary: data.summary,
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Writings</h1>
      
      <p className="text-stone-900 mb-6">
        Welcome to my writings page. Here, I share my thoughts, insights, and experiences on various topics 
        that interest me. From personal development to technology trends, these articles reflect my journey 
        of continuous learning and exploration.
      </p>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4 last:border-b-0">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/writings/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            {post.summary && <p className="text-stone-900">{post.summary}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}