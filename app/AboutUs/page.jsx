"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const AboutUs = () => {
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
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f7f7f7] px-6 lg:px-16 py-12">

        {/* 🔹 Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Content */}
          <div className="max-w-2xl">

            <h1 className="text-4xl font-bold text-gray-800">
              About <span className="text-[#3ab299]">Us</span>
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Spill the tea anonymously and explore Subteas!
            </p>

            {/* Welcome */}
            <h2 className="text-3xl font-semibold mt-10 text-gray-800">
              Welcome to Postify!
            </h2>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Postify is your anonymous platform for spilling the tea and
              exploring Subteas of interest. Here, identity is hidden so you
              can dish out and engage with juicy gossip without holding back. 🫖
            </p>

            {/* Mission */}
            <h2 className="text-3xl font-semibold mt-10 text-gray-800">
              Our Mission
            </h2>

            <p className="text-gray-600 mt-3 leading-relaxed">
              To provide a safe and <span className="font-semibold">
              anonymous space</span> where you can spill the tea, engage in
              discussions, and connect over shared interests without revealing
              your identity.
            </p>

          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img
              src="/tea-bg.png"
              alt="About Postify"
              className="w-[350px] lg:w-[420px]"
            />
          </div>

        </div>



        {/* 🔹 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">

            <img
              src="/tea.png"
              className="h-20 mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Spill the Tea
            </h3>

          </div>



          {/* Card 2 */}
          <Link href={`/explore`}>
          <div className="bg-white rounded-2xl cursor-pointer p-8 text-center shadow-sm hover:shadow-md transition">

            <img
              src="/explore.png"
              className="h-20 mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Explore Subteas
            </h3>

          </div>
          </Link>



          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">

            <img
              src="/message.png"
              className="h-20 mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Engage Anonymously
            </h3>

          </div>

        </div>

      </div>
    </>
  );
};

export default AboutUs;
