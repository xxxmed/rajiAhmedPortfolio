
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
 
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  output: 'standalone',
  
  // Optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'], // Formats modernes pour réduire la taille
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache des images optimisées
  },
  
  // Compression et minification
  compress: true, // Active la compression gzip
  
  // Optimisation du build
  reactStrictMode: true,
  poweredByHeader: false, // Retire le header X-Powered-By
  
  // Variables d'environnement
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY
  },
  
  // Redirections
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  },
  
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Sécurité
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          
          // Performance et cache
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { 
            key: 'Strict-Transport-Security', 
            value: 'max-age=63072000; includeSubDomains; preload' 
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ]
      },
      // Cache spécifique pour les assets statiques
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Optimisation du bundle
  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
  },
}

export default withNextIntl(nextConfig);


