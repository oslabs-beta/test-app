/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images: {
        domains: ['www.howcast.com']
      },
}

module.exports = nextConfig
