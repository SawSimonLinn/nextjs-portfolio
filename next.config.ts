import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'], // Add all required domains here
  },
};

export default nextConfig;
