/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Para GitHub Pages
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/luisalbertms.dev' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/luisalbertms.dev/' : '',
}

export default nextConfig
