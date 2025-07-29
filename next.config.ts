import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_PAGES ? undefined : 'export',
  images: {
    domains: ["images.ctfassets.net"],
  },
};

export default nextConfig;