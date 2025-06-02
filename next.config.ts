import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

// const repoName = "beauty-studio-next"; 

// const nextConfig: NextConfig = {
//   basePath: isProd ? `/${repoName}` : "",
//   assetPrefix: isProd ? `/${repoName}` : "",
//    images: {
//     domains: ['images.ctfassets.net'],
//   },
// };

// export default nextConfig;
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: "",
  assetPrefix: "",
  images: {
    domains: ['images.ctfassets.net'],
  },
};
