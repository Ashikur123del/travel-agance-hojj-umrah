// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function proxy(request: NextRequest) {
//   // const sessionCookie =
//   //   request.cookies.get("__Secure-better-auth.session_token") ||
//   //   request.cookies.get("better-auth.session_token");

//   // if (!sessionCookie) {
//   //   const loginUrl = new URL("/login", request.url);
//   //   loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
//   //   return NextResponse.redirect(loginUrl);
//   // }

//   // return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     // "/dashboard/:path*",
//     // "/heroslider/:path*",
//     // "/addnews/:path*",
//     // "/addgallery/:path*",
//   ],
// };



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  // Cookie না থাকলে login এ পাঠাও
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