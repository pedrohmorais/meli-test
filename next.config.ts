import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'http2.mlstatic.com',
      },
    ],
  },
  env: {
    MELI_API: 'https://api.mercadolibre.com/sites/MLA',
  },
}

export default nextConfig
