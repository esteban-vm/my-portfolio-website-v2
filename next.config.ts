import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
  devIndicators: false,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
