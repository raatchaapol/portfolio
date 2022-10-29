/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  webpackDevMiddleware: config => {
      config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
      }
      return config
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      },
    ]
  }
}

module.exports = nextConfig
