import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@material-symbols-svg/react",
      "@material-symbols-svg/react/w400",
    ],
  },
};

export default nextConfig;
