import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/landing_page",
  assetPrefix: "/landing_page/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
