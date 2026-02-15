import { NextResponse } from "next/server";

export function middleware(req) {
  try {
    const token = req.cookies.get("token")?.value;
    console.log(req.cookies);
    console.log("Token:", token);

    // If token missing → redirect
    if (!token) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    // Token exists → allow
    return NextResponse.next();

  } catch (err) {
    console.log("Middleware crash:", err);

    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
}

export const config = {
  matcher: [
    "/home/:path*",
    "/explore/:path*",
    "/subtea/:path*",
    "/edit/:path*",
    "/AboutUs/:path*",
    "/ContactUs/:path*",
    "/profile/:path*",
  ],
};
