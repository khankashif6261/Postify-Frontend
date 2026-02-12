"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar"
import Link from "next/link"
const Profile = () => {
  const [posts, setPosts] = useState([])
  const [username, setusername] = useState("");
  const user = {
    verified: true,
    avatar: "/avatar.svg", // replace with your hood avatar if posts exist, map here
  };
  
  useEffect(() => {
    const postFetching = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-posts`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setPosts(data);
    }
    postFetching();
  }, [])
  const deletePost = async (postId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await res.json();
    if (data.deleted) {
      setPosts(prev => prev.filter(p => p._id !== postId));

    }
  }
  const redirectToEdit = (postId) => {
    window.location.href = `/edit/${postId}`;
  }
  const likePost = async (postId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/like`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post._id === postId
          ? { ...post, likes: data.likes }
          : post
      ))
  }

  useEffect(() => {
    const fetchusername = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setusername(data);
    }
    fetchusername();
  }, [])

  return (
    <div className="min-h-screen bg-[#f6f7f8]">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-8 bg-white rounded-2xl shadow p-6">
        <div className="flex items-center gap-6">

          <img
            src={user.avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-[#e6f4ef] object-cover"
          />

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                @{username}
              </h2>

              {user.verified && (
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  ✔
                </span>
              )}
            </div>

            <div className="flex gap-3 mt-4">
              <Link href={`/createPost`}>
              <button className="bg-[#6db6a5] hover:bg-[#5aa997] text-white px-5 py-2 rounded-xl font-medium transition">
                Spill Tea
              </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-end w-[550px]">
            <Link href={`/logout`}>
              <button className="bg-red-400 cursor-pointer text-white px-4 py-2 rounded-full">Logout</button>
            </Link>
            </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 bg-white rounded-2xl shadow p-6">

        <div className="flex gap-6 border-b pb-2 mb-6">
          <button className="text-gray-500 hover:text-gray-700">
            My Spills
          </button>
        </div>


        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {posts.map(post => (
            <div
              key={post._id}
              className="bg-[#ececec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <h3 className="px-4 pt-3 text-sm text-blue-500 font-medium truncate">
                @{username}
              </h3>

              {post.image && (
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${post.image}`}
                  className="w-full h-48 object-cover mt-2"
                />
              )}

              {post.mediaType === "video" && (
                <div className="relative mt-2">
                  <video
                    playsInline
                    controls={false}
                    onClick={e =>
                      e.target.paused ? e.target.play() : e.target.pause()
                    }
                    className="w-full h-48 object-cover"
                  >
                    <source src={`${process.env.NEXT_PUBLIC_API_URL}${post.media}`} />
                  </video>
                </div>
              )}

              {post.content && (
                <p className="px-4 pt-3 text-sm text-gray-700 line-clamp-2">
                  {post.content}
                </p>
              )}


              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <img
                    onClick={() => likePost(post._id)}
                    className="h-5 w-5 cursor-pointer"
                    src="https://images.vexels.com/media/users/3/223247/isolated/preview/32bfd7335b2e334bff40b97de9061096-like-social-media-icon.png"
                  />
                  <span className="text-sm text-gray-600">
                    {post.likes?.length || 0}k
                  </span>
                </div>

                {post.user.name === user && (
                  <div className="flex items-center gap-3">
                    <span
                      onClick={() => redirectToEdit(post._id)}
                      className="text-xs text-blue-500 cursor-pointer"
                    >
                      Edit
                    </span>
                    <img
                      onClick={() => deletePost(post._id)}
                      className="h-5 w-5 cursor-pointer"
                      src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                    />
                  </div>

                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Profile;
