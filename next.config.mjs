/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export',
  // Make sure this matches your repository name exactly
  basePath: '/aura-thumbnails',
  trailingSlash: true,
}

export default nextConfig

