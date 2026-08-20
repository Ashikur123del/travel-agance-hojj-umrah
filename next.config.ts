import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // সার্ভার অ্যাকশনের বডি সাইজ লিমিট বাড়ানোর জন্য এই অংশটুকু যোগ করুন
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', 
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
    ],
  },
};

export default nextConfig;