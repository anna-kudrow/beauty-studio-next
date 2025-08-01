import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
 
module.exports = withBundleAnalyzer(nextConfig)

export default nextConfig;