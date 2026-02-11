"use client"
import React, { useEffect } from 'react'

const page = () => {
  useEffect(() => {
    const defaultServerCall = async () => {
      const res = await fetch("http://localhost:5000/",{
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.isDefault) {
        window.location.href="/register";
      }
    }
    defaultServerCall();
  }, []);
  return (
    <div>Page</div>
  )
}
export default page