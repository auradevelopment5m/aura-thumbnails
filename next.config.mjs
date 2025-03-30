/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/aura-thumbnails',
  trailingSlash: true,
  assetPrefix: '/aura-thumbnails',
}

export default nextConfig

