/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites()
  {
    return [
      {
        source: '/public/HTML/first.html',
        destination: '/pages/api/first.js',
      },
    ]
  }
}

module.exports = nextConfig
