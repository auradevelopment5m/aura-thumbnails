/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'docs',
  basePath: '/aura-thumbnails',
  trailingSlash: true,
  // Add this to ensure CSS is properly included
  assetPrefix: '/aura-thumbnails',
}

export default nextConfig

