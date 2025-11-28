/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@shared/ui', '@shared/core'],
};

module.exports = nextConfig;

