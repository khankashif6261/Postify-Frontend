import { NextResponse } from "next/server";

export function middleware(req){

const token = req.cookies.get("token");
const { pathname } = req.nextUrl;

// allow public pages
if(
pathname === "/login" ||
pathname === "/register"
){
return NextResponse.next();
}

// protect private pages
if(!token){
return NextResponse.redirect(
new URL("/login",req.url)
);
}

return NextResponse.next();

}

export const config = {
matcher:[
"/home/:path*",
"/profile/:path*",
"/explore/:path*"
]
};