/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  infuraKey: process.env.INFURA_KEY,
  alchemyKey: process.env.ALCHEMY_KEY,
  magicKey: process.env.MAGIC_KEY,
};

module.exports = nextConfig;
