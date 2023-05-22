/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/:subdomain/:path*',
        destination: 'https://:subdomain.localhost:3001/:path*',
      },
    ];
  },
}

module.exports = nextConfig
