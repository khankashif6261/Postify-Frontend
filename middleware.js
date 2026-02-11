import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  // If logged in → block login page
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // Protected routes
  if (!token && pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname.startsWith("/edit")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname.startsWith("/like")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname.startsWith("/subtea")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!token && pathname.startsWith("/createPost")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/home/:path*",
    "/edit/:path*",
    "/like/:path*",
    "/createPost/:path*",
    "/subtea/:path*",
    "/profile/:path*",
  ],
};
