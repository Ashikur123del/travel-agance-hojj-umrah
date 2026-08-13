import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // এটি আনস্প্ল্যাশ সহ পৃথিবীর যেকোনো ওয়েবসাইটের ইমেজ গ্লোবালি এলাউ করবে
      },
    ],
  },
};

export default nextConfig;