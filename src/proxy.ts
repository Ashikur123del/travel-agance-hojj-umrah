import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = 
    request.cookies.get("better-auth.session_token") || 
    request.cookies.get("__Secure-better-auth.session_token");

  // যদি সেশন কুকি না থাকে, তবে ইউজারকে লগইন পেজে রিডাইরেক্ট করে দেবো
  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set(
      "callbackUrl",
      request.nextUrl.pathname
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// এখানেmatcher-এ আপনার প্রটেক্ট করতে চাওয়া রাউটগুলো বলে দিতে হবে
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/heroslider/:path*",
    "/addnews/:path*",
    "/addgallery/:path*",
  ],
};