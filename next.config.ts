import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath не нужен для GitHub Pages в корне репозитория
};

export default nextConfig;
