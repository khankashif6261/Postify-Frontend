"use client"
import React, { useEffect } from 'react'

const logout = () => {
    useEffect(() => {
    HandleApi();
    }, [])
    const HandleApi = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });
    const data = await res.json();
    if(data.isLogout) {
      window.location.href="/login";
    }
  }
  return (
    <div>logout</div>
  )
}

export default logout