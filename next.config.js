/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {not: [/url/]},
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mattoapi.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
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
