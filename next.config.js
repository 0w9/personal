/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: [
          // if the host is `app.acme.com`,
          // this rewrite will be applied
          {
              source: '/:path*',
              has: [
                  {
                      type: 'host',
                      value: 'beep.personal-7q7in50we-0w9.vercel.app',
                  },
              ],
              destination: '/app/:path*',
          },
      ]
  }
  },
}

module.exports = nextConfig
