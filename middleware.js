import { NextResponse } from "next/server"

export function middleware(req) {
    const token = req.cookies.get("token").value;
    console.log(token);
    try {
        if(token) {
        return NextResponse.next();
    }
    else {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    }
    catch(err) {
        console.log("Error from catch is: ", err);
        return NextResponse.redirect(new URL("/login",req.url));
    }
}
export const config = 
{
    matcher: ["/home/:path*", "/explore/:path*", "/subtea/:name/:path*", "/edit/:path*","/AboutUs/:path*", "/ContactUs/:path*", "/profile/:path*"],
}