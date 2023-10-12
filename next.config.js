/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img-b.udemycdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img-c.udemycdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'd3f1iyfxxz8i1e.cloudfront.net',
        port: '',
        pathname: '**',
      },
    ],
  },
}
