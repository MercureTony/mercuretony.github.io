import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
  p: ({ children }) => <p className="mb-4">{children}</p>,
  a: ({ href, children }) => <Link href={href as string} className="text-blue-600 hover:underline">{children}</Link>,
  ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
  li: ({ children }) => <li className="mb-2">{children}</li>,
  img: ({ src, alt, width, height }) => (
    <Image 
      src={src as string} 
      alt={alt as string} 
      width={width as number || 800} 
      height={height as number || 600} 
      layout="responsive"
    />
  ),
}
