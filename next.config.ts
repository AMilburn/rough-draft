import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/rough-draft',
  assetPrefix: '/rough-draft/',
  trailingSlash: true,
};

export default nextConfig;
