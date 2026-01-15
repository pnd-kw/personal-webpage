/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/personal-webpage",
  assetPrefix: "/personal-webpage/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
