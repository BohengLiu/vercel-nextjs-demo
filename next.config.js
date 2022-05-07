/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  infuraKey: process.env.INFURA_KEY,
  alchemyKey: process.env.ALCHEMY_KEY,
  magicKey: process.env.MAGIC_KEY,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }

    return config
  },
}

module.exports = nextConfig
