import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    qualities: [95, 100],
  },
  async redirects() {
    return [
      {
        source: '/copywriting-ebook',
        destination: '/ebook-bo-de-tang-mien-phi',
        permanent: true,
      },
      {
        source: '/copywriting-ebook/thank-you',
        destination: '/ebook-bo-de-tang-mien-phi/thank-you',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
