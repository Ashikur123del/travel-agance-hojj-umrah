import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://travel-agence-server.vercel.app",
  fetchOptions: {
    credentials: "include", // এই লাইনটি অত্যন্ত জরুরি (ক্রসব্রাউজার কুকি আদান-প্রদানের জন্য)
  },
});