import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 🟢 proxy.ts ফাইলের জন্য ফংশনের নাম অবশ্যই `proxy` বা `default` হতে হবে
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🟢 Session Cookies (HTTP and HTTPS both handled)
  const token =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__Secure-better-auth.session_token")?.value ||
    request.cookies.get("session_token")?.value ||
    request.cookies.get("token")?.value ||
    request.cookies.get("agent_verified")?.value;

  const protectedRoutes = [
    "/dashboard",
    "/heroslider",
    "/addnews",
    "/addgallery",
    "/contactinfo",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // 🔴 Protected Route Access Control
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 🟢 Logged-in users redirect from /login
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/heroslider/:path*",
    "/addnews/:path*",
    "/addgallery/:path*",
    "/contactinfo/:path*",
    "/login",
  ],
};