/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

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

module.exports = withNextIntl(withMDX(nextConfig))
