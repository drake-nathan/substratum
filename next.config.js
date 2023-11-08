/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mattoapi.blob.core.windows.net",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "arweave.net",
        pathname: "/dtEayxAD2Aknd8g8WWyErEX37kesMRsJhbopwDYPhdo/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/:slug/token",
        destination: "/project/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
