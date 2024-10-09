/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'atorreforte.com.br',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
