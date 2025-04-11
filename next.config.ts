import type { NextConfig } from "next";

const repoName = "beauty-studio-next"; 
const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
   images: {
    domains: ['images.ctfassets.net'],
  },
};

export default nextConfig;
