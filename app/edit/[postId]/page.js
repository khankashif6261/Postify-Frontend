"use client";
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
const page = () => {
    const { postId } = useParams();
    const [content, setcontent] = useState("");
    const updatePosts = async(PostId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/edit/${PostId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    window.location.href="/home";
    }
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
  return (
    <><div className='bg-zinc-900 h-screen min-w-full p-10'>
      <form onSubmit={()=> {updatePosts(postId)}}>
        <div className="main bg-zinc-800 rounded-3xl min-h-1/2 min-w-1/4 p-10 flex flex-col">
          <h1 className='text-white text-3xl'>Hi, Kashif 👋</h1>
          <span className='text-zinc-300 mt-4'>Edit a Post </span>
          <textarea value={content} onChange={(e) => { setcontent(e.target.value) }} className='bg-zinc-700 p-4 text-white resize-none mt-5 min-w-1/4 rounded-lg h-42 outline-none' placeholder="Edit a previous Post" name='content'></textarea>
          <input type='submit' value="Update Post" className=' bg-blue-500 mt-5 w-[150px] py-2 px-4 rounded-md'></input>
        </div>
        </form>
        </div>
      </> 
  )
}
export default page