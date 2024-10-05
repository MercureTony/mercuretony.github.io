/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['example.com'], // Ajoutez ici les domaines des images que vous utilisez
  },
}

module.exports = withMDX(nextConfig)
