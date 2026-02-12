import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const publicRoutes = ["/login", "/register"];
  const token = req.cookies.get("token")?.value;
  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (token) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/verify`,
        {
          method: "GET",
          headers: {
            Cookie: `token=${token}`,
          },
        }
      );
      if (res.status === 401) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      if (pathname === "/login") {
        return NextResponse.redirect(new URL("/home", req.url));
      }
    } catch (err) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home/:path*",
    "/profile/:path*",
    "/createPost/:path*",
    "/edit/:path*",
    "/subtea/:path*",
    "/login",
  ],
};
