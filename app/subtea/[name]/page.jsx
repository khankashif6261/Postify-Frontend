"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"
import Navbar from "@/app/components/navbar"

const SubteaPage = () => {
  const params = useParams();
  const [posts, setPosts] = useState([])
  const name = params?.name;

  if (!name) {
    return <div>No Subtea Found</div>;
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
    if (!name) return;

    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/subtea/${name}`
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [name]);

  return (
    <>
      <Navbar />

      {/* BACK BUTTON */}
      <Link href={`/explore`}>
        <div className="px-4 sm:px-6">
          <button className="bg-[#3ab299] px-4 py-2 text-white rounded-full cursor-pointer mt-3">
            Go Back
          </button>
        </div>
      </Link>

      {/* HEADER */}
      <div className="bg-[url('/bg-subtea.png')] bg-cover bg-center mx-4 sm:mx-6 my-3 rounded-3xl p-5 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold capitalize mb-1">
          {name}
        </h1>
        <span>r/{name}</span>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 p-3 sm:p-6 bg-[#ececec]">

        {/* POSTS */}
        <div className="space-y-4 w-full lg:w-[70%]">
          {[...posts].reverse().map((post) => (

            <div
              key={post._id}
              className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-5"
            >

              <h3 className="px-2 pt-2 text-sm text-blue-500 font-medium truncate">
                @{post.user}
              </h3>

              <h2 className="font-semibold text-gray-900 text-base sm:text-lg">
                {post.content.length > 80
                  ? post.content.slice(0, 80) + "..."
                  : post.content}
              </h2>

              <div className="mt-3">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-md">
                  {post.subtea}
                </span>
              </div>

              {/* IMAGE */}
              {post.mediaType === 'image' && (
                <div className="w-full max-w-[260px] h-[360px] sm:h-[460px] rounded-2xl overflow-hidden flex items-center justify-center mx-auto">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${post.media}`}
                    className="w-full mt-6 h-full object-contain"
                  />
                </div>
              )}

              {/* VIDEO */}
              {post.mediaType === "video" && (
                <div className="w-full max-w-[260px] h-[360px] sm:h-[460px] rounded-2xl overflow-hidden flex items-center justify-center mx-auto">
                  <video
                    playsInline
                    controls
                    className="w-full mt-6 h-full object-contain"
                  >
                    <source src={`${process.env.NEXT_PUBLIC_API_URL}${post.media}`} />
                  </video>
                </div>
              )}

              <p className="text-gray-600 mt-3 text-sm">
                {post.content}
              </p>

              <div className="flex items-center gap-2 mt-4 text-gray-600">
                <img
                  onClick={() => likePost(post._id)}
                  className="h-5 w-5 cursor-pointer"
                  src="https://images.vexels.com/media/users/3/223247/isolated/preview/32bfd7335b2e334bff40b97de9061096-like-social-media-icon.png"
                />
                <span className="text-sm text-gray-600">
                  {post.likes?.length || 0}k
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="border rounded-2xl text-center p-3 h-auto lg:h-[600px] w-full lg:w-[350px] bg-white">

          <h1 className="font-semibold mt-3">About Postify</h1>

          <div className="flex flex-col sm:flex-row justify-evenly gap-3 sm:gap-0">

            <Link href={`/createPost`}>
              <button className="bg-[#3ab299] py-2 mt-3 px-4 cursor-pointer rounded-xl text-white w-full sm:w-auto">
                Create Post
              </button>
            </Link>

            <Link href={`/AboutUs`}>
              <button className="bg-[#ececec] border cursor-pointer py-2 mt-3 px-4 rounded-xl w-full sm:w-auto">
                About Us
              </button>
            </Link>

          </div>

          <div className="border rounded-2xl mt-5 p-3 bg-[#ececec] text-sm">
            <span>
              Postify is an anonymous social platform built for sharing thoughts, stories, opinions, and “tea” without the fear of identity exposure...
            </span>
          </div>

        </div>

      </div>
    </>
  );
};

export default SubteaPage;
