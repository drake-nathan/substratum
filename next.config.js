/** @type {import('next').NextConfig} */
export default {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "mattoapi.blob.core.windows.net",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "127.0.0.1",
        pathname: "/**",
        protocol: "http",
      },
      {
        hostname: "arweave.net",
        pathname: "/dtEayxAD2Aknd8g8WWyErEX37kesMRsJhbopwDYPhdo/**",
        protocol: "https",
      },
    ],
    unoptimized: true,
  },
  output: "standalone",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: "/",
        permanent: true,
        source: "/project",
      },
      {
        destination: "/project/:slug",
        permanent: true,
        source: "/project/:slug/token",
      },
    ];
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    // Web3Modal
    config.externals.push("pino-pretty", "lokijs", "encoding");

    return config;
  },
};
