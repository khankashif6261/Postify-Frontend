import { NextResponse } from "next/server";

export async function middleware(req) {
  try {
    // Call backend verify route
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/verify`,
      {
        method: "GET",
        headers: {
          cookie: req.headers.get("cookie") || "",
        },
      }
    );

    const data = await res.json();

    // If not valid → redirect
    if (!data.valid) {
      return NextResponse.redirect(
        new URL("/login", req.url)
      );
    }

    // Valid → allow
    return NextResponse.next();

  } catch (err) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
}

export const config = {
  matcher: [
    "/home/:path*",
    "/explore/:path*",
    "/subtea/:name/:path*",
    "/edit/:path*",
    "/AboutUs/:path*",
    "/ContactUs/:path*",
    "/profile/:path*",
  ],
};
