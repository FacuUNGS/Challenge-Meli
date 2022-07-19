/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http2.mlstatic.com'],
  },
  env: {
    DEVELOP_WEB_API: process.env.DEVELOP_WEB_API,
  }
}

module.exports = nextConfig


