/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
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
