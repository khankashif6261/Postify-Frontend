"use client"
import React, { useEffect } from 'react'

const logout = () => {
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch(`${API_URL}/home`, {
        credentials: "include"
      });
  
      if (res.status === 401) {
        window.location.href="/login";
      }
    };
    checkAuth();
  }, []);
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