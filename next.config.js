/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io', 'nft-mp-v2.vercel.app'],
  },
};

module.exports = nextConfig;
