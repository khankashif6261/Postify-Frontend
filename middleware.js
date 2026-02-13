"use client"
import { NextResponse } from "next/server";
import React, { useEffect, useState } from "react";
export default function MiddlewareJs (req) {
    const [isValid, setisValid] = useState(false);
    useEffect(() => {      
    const authCheck = async() => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await res.json();
      setisValid(data.valid);
    }
    authCheck();
    }, [])
    try {
        if (!isValid) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    else {
        return NextResponse.next();
    }
    }
    catch (err) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}
export const config = 
{
    matcher: ["/home/:path", "/expore/:path", "/subtea/:name/:path", "/edit/:path","/AboutUs/:path", "/ContactUs/:path", "/profile/:path"],
}