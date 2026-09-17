import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  typedRoutes: true,
  devIndicators: false,
  reactCompiler: true,
  experimental: {
    typedEnv: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
