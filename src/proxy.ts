import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ Exported function-এর নাম অবশ্যই 'proxy' হতে হবে
export function proxy(request: NextRequest) {
  const sessionCookie =
    request.cookies.get("__Secure-better-auth.session_token") ||
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("agent_verified"); // Agent verification cookie

  // Protected route check
  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/heroslider/:path*",
    "/addnews/:path*",
    "/addgallery/:path*",
  ],
};