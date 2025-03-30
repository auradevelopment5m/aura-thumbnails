/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export',
  distDir: 'docs',
  basePath: process.env.NODE_ENV === 'production' ? '/aura-thumbnails' : '',
  trailingSlash: true,
}

export default nextConfig

