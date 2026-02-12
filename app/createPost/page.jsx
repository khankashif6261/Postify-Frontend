"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar"
export default function createPost() {
  const [content, setcontent] = useState("");
  const [file, setFile] = useState(null);
  const [postdata, setpostdata] = useState("");  
  const [subtea, setSubtea] = useState("");
  const [username, setusername] = useState("")
  const [posts, setPosts] = useState([]);

const createPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    formData.append("subtea", subtea);
    if (file) formData.append("media", file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    const data = await res.json();
    setpostdata(data.content);
    rePostFetching();
    setcontent("");
  }
const rePostFetching = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setPosts(data);
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
useEffect(()  => {
  const fetchusername = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });
    const data = await res.json();
    setusername(data.username);
  }
fetchusername();
}, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen relative overflow-hidden bg-[#f6f8f7]">

      <div className="absolute bottom-0 left-0 w-full opacity-40">
        <img
          src="/bg-post.png"   
          alt="bg"
          className="w-full object-cover"
        />
      </div>

      <div className="absolute top-24 left-32 w-3 h-3 bg-green-200 rounded-full opacity-40"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-yellow-200 rounded-full opacity-40"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-center">
          Create <span className="text-emerald-500">Post</span>
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Share photos, videos and thoughts with the world anonymously.
        </p>
<form encType="multipart/form-data">

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

          <div className="flex items-center justify-between">

            

              <h3 className="font-semibold text-gray-700">
                Posting as {username}
              </h3>
            
            <select
  value={subtea}
  onChange={(e) => setSubtea(e.target.value)}
  className="bg-zinc-100 border-zinc-400 border-2 py-2 px-4 rounded-full mx-3"
>
  <option value="">Choose Subtea</option>
  <option value="teaspills">teaspills</option>
  <option value="3amthoughts">3amthoughts</option>
  <option value="bollyGossips">bollyGossips</option>
  <option value="horrorstories">horrorstories</option>
  <option value="askpostify">askpostify</option>
  <option value="confessions">Confessions</option>
  <option value="drama">drama</option>
  <option value="advice">Advice</option>
  <option value="funny">funny</option>
</select>
          </div>

          <textarea
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full mt-6 border rounded-2xl p-4 h-32 resize-none outline-none"
          />

          <div className="flex items-center justify-between mt-4">

            <label className="flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              />
              📷 Photo/Video
            </label>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={createPost}
              className="px-10 py-3 rounded-full text-white font-semibold
                         bg-linear-to-r from-emerald-400 to-teal-500
                         hover:opacity-90 transition"
            >
              Post
            </button>
          </div>
        </div>
</form>
        <p className="text-center text-gray-500 text-sm mt-8">
          Posts are anonymous. Your identity will not be shown.
        </p>

        <p className="text-center text-gray-500 text-sm">
          Please follow our{" "}
          <span className="text-emerald-500 font-medium cursor-pointer">
            Community Guidelines
          </span>{" "}
          when posting.
        </p>
      </div>
    </div>
</>
  );
}
