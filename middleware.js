import { NextResponse } from "next/server"

export default function MiddlewareJs(req) {
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
        NextResponse.redirect(new URL("/login",req.url));
    }
}
export const config = 
{
    matcher: ["/home", "/expore", "/subtea/:name/:path", "/edit/:path","/AboutUs", "/ContactUs", "/profile"],
}