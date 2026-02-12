'use client';
import React, { useEffect, useState } from 'react'
import Navbar from "@/app/components/navbar"
import Link from "next/link";

const home = () => {
  const [subtea, setSubtea] = useState("");
  const [file, setFile] = useState("");
  const [posts, setPosts] = useState([]);
  const [postdata, setpostdata] = useState("");
  const [visibleCount] = useState(3);
  const [content, setcontent] = useState("");
  const [user, setuser] = useState("");

  useEffect(() => {
    const postFetching = async () => {
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
    const serverData = async () => {
      console.log(`${process.env.NEXT_PUBLIC_API_URL}/home`);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setuser(data.username);
    }
    serverData();
  }, []);

  return (
    <>
    <Navbar/>
      <div>
        <div className='min-h-screen w-full flex flex-wrap'>

          {/* HERO */}
          <div className='main flex flex-col lg:flex-row w-full items-center'>

            {/* LEFT */}
            <div className='w-full lg:w-1/2 bg-[#fdfbfd] px-6 lg:px-0 text-center lg:text-left'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-12 lg:mt-15 lg:mx-12'>
                Share Your <span className='text-[#3ab299]'>Moments</span>
              </h1>

              <div className='mt-5'>
                <span className='text-base sm:text-lg lg:mx-12 block'>
                  Post Photos, Videos and Thougts with the World.
                </span>
              </div>

              <div className='mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start lg:mx-12'>
                <Link href={`/createPost`}>
                  <button className='cursor-pointer bg-[#3ab299] text-white px-4 py-2 rounded-xl w-full sm:w-auto'>
                    Create Post
                  </button>
                </Link>

                <Link href={`/explore`}>
                  <button className='cursor-pointer bg-[#ececec] py-2 px-4 rounded-lg text-grey-200 w-full sm:w-auto'>
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className='w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
              <img
                src="/bg-3.png"
                className='w-[90%] sm:w-[70%] lg:w-full h-auto max-h-[300px] object-contain'
              />
            </div>

          </div>

          {/* POSTS GRID */}
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">

            {posts.slice(0, visibleCount).map(post => (
              <div
                key={post._id}
                className="bg-[#ececec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >

                <h3 className="px-4 pt-3 text-sm text-blue-500 font-medium truncate">
                  @{post.user.name || "Anonymous"}
                </h3>

                {post.mediaType === "image" && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${post.media}`}
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

          {/* VIEW MORE */}
          <div className='flex w-full justify-center'>
            <Link href={`/explore`}>
              <button className='bg-[#3ab299] px-4 py-2 cursor-pointer rounded-xl m-5 text-white'>
                View More Posts
              </button>
            </Link>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="h-auto py-16 w-full flex justify-center items-center px-4">
          <div className="mail-content bg-[url('/mail-bg.png')] bg-cover bg-center p-8 sm:p-14 lg:p-20 w-full lg:w-[80%] rounded-3xl text-center lg:text-left">

            <h1 className='text-2xl sm:text-3xl font-semibold'>
              Stay Updated <span className='font-bold'>with</span>{" "}
              <span className='text-[#ffffff]'>Postify!</span>
            </h1>

            <span className='block mt-2 text-sm sm:text-base'>
              Subscribe to our Newsletter to get latest news and updates.
            </span>

            <div className='mt-4 flex flex-col sm:flex-row gap-3 items-center lg:items-start'>
              <input
                type='email'
                className='outline-none bg-white px-5 py-3 border w-full sm:w-85 rounded-xl'
                placeholder='Enter Your Email Address'
              />
              <button className='bg-[#3ab299] px-4 py-2 rounded-2xl text-white w-full sm:w-auto'>
                Subscribe
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="mt-20 lg:mt-36 border-t border-teal-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">

          <h2 className="text-2xl font-semibold text-teal-500">Postify</h2>

          <p className="mt-1 text-sm text-gray-500">
            Share moments.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-gray-600 hover:text-teal-500 transition">Home</a>
            <a href="/explore" className="text-gray-600 hover:text-teal-500 transition">Explore</a>
            <a href="/about" className="text-gray-600 hover:text-teal-500 transition">About Us</a>
            <a href="/contact" className="text-gray-600 hover:text-teal-500 transition">Contact</a>
          </div>

          <div className="mt-8 border-t border-teal-100"></div>

          <p className="mt-4 text-xs text-gray-400">
            © 2026 Postify. All rights reserved.
          </p>

        </div>
      </footer>
    </>
  )
}

export default home
