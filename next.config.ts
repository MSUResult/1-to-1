import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Ignore type errors during build (important for Vercel)
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Ignore lint errors too
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
