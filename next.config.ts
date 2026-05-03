import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow local /public images (default) and external domains if needed
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 hours
  },
  // Compress responses
  compress: true,
  output: 'export',
}

export default nextConfig
