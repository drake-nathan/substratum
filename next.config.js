/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mattoapi.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'arweave.net',
        pathname: '/dtEayxAD2Aknd8g8WWyErEX37kesMRsJhbopwDYPhdo/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/project',
        destination: '/',
        permanent: true,
      },
      {
        source: '/project/:slug/token',
        destination: '/project/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
