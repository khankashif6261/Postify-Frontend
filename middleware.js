import { NextResponse } from "next/server"

export default function MiddlewareJs(req) {
    const token = req.cookies.get("token").value;
    console.log(token);
    if(!token) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
    else {
        return NextResponse.next();
    }
}
export const config = 
{
    matcher: ["/home/:path", "/expore/:path", "/subtea/:name/:path", "/edit/:path","/AboutUs/:path", "/ContactUs/:path", "/profile/:path"],
}