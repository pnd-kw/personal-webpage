/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/personal-webpage" : "",
  assetPrefix: isProd ? "/personal-webpage/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
