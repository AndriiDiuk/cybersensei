/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  experimental: {
    images: true,
  },
  trailingSlash: true,
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
