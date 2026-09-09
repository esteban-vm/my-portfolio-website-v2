import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  typedRoutes: true,
  devIndicators: false,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
