/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'via.placeholder.com'],
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/aura-thumbnails' : '',
  trailingSlash: true,
}

export default nextConfig

