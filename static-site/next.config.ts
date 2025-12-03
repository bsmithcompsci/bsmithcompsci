import type { NextConfig } from "next";

export const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
