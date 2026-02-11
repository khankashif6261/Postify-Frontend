"use client";
import Link from "next/link";
import React from "react";
import Navbar from "@/app/components/navbar";

const Explore = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f7f7f7] px-6 lg:px-16 py-10">

        {/* 🔍 Hero + Search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>
            <h1 className="text-4xl font-bold">
              Explore <span className="text-[#3ab299]">Subtea</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Explore the Communities for your Interest.
            </p>
          </div>

          {/* Search */}
          <div className="flex w-full lg:w-[500px]">
            <input
              type="text"
              placeholder="Search for subteas..."
              className="bg-white w-full px-4 py-3 rounded-l-xl border border-gray-300 outline-none"
            />
            <button className="bg-[#3ab299] cursor-pointer text-white px-6 rounded-r-xl">
              Search
            </button>
          </div>
        </div>

        {/* 🔥 Trending */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">
            Trending Subteas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <Link href={`/subtea/teaspills`}>
              <div className="bg-linear-to-r from-blue-100 to-blue-50 border rounded-xl p-5 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="/tea.avif"
                    className="h-12 w-12"
                  />
                  <div>
                    <h3 className="font-semibold">Tea Spills</h3>
                    <p className="text-sm text-gray-600">
                      12k members | 3.2k posts
                    </p>
                  </div>
                </div>

                <button className="bg-[#3ab299] cursor-pointer text-white px-5 py-1 rounded-full">
                  Open
                </button>
              </div>
            </Link>
            <Link href={`/subtea/bollyGossips`}>
              {/* Card 2 */}
              <div className="bg-linear-to-r from-pink-100 to-pink-50 border rounded-xl p-5 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="/bollywood.svg"
                    className="h-12 w-12"
                  />
                  <div>
                    <h3 className="font-semibold">
                      BollyGossips
                    </h3>
                    <p className="text-sm text-gray-600">
                      8.4k members | 1.6k posts
                    </p>
                  </div>
                </div>

                <button className="bg-[#3ab299] cursor-pointer text-white px-5 py-1 rounded-full">
                  Open
                </button>
              </div>
            </Link>
            <Link href={`subtea/3amthoughts`}>
              {/* Card 3 */}
              <div className="bg-linear-to-r from-rose-100 to-rose-50 border rounded-xl p-5 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="/brain.avif"
                    className="h-12 w-12"
                  />
                  <div>
                    <h3 className="font-semibold">
                      3AM Thoughts
                    </h3>
                    <p className="text-sm text-gray-600">
                      7.8k members | 2.1k posts
                    </p>
                  </div>
                </div>

                <button className="bg-[#3ab299] cursor-pointer text-white px-5 py-1 rounded-full">
                  Open
                </button>
              </div>
            </Link>
          </div>
        </section>
        {/* 🆕 New Subteas */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">
            New Subteas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Horror */}
            <Link href={`/subtea/horrorstories`}>
            <div className="bg-linear-to-r cursor-pointer from-amber-50 to-amber-100 border rounded-xl p-5 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src="/story.avif"
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="font-semibold">
                    horror stories
                  </h3>
                  <p className="text-sm text-gray-600">
                    1.5k members | 632 posts
                  </p>
                </div>
              </div>

              <button className="bg-[#3ab299] cursor-pointer text-white px-5 py-1 rounded-full">
                Open
              </button>
            </div>
            </Link>
            {/* Askpostify */}
            <Link href={`/subtea/askpostify`}>
            <div className="bg-linear-to-r from-emerald-50 to-emerald-100 border rounded-xl p-5 flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src="/ask.svg"
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="font-semibold">
                    Askpostify
                  </h3>
                  <p className="text-sm text-gray-600">
                    1.2k members | 512 posts
                  </p>
                </div>
              </div>

              <button className="bg-[#3ab299] text-white px-5 cursor-pointer py-1 rounded-full">
                Open
              </button>
            </div>
          </Link>
          </div>
        </section>

        {/* 📂 Categories */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">
            Browse Categories
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
<Link href={`subtea/drama`}>
            <CategoryCard
              icon="🔥"
              title="Drama"
              meta="1.4k members"
            />
</Link>
<Link href={`/subtea/confessions`}>
            <CategoryCard
              icon="🎭"
              title="Confessions"
              meta="3.4k members"
            />
</Link>
<Link href={`/subtea/advice`}>
            <CategoryCard
              icon="💡"
              title="Advice"
              meta="1.2k members"
            />
</Link>
<Link href={`/subtea/Funny`}>
            <CategoryCard
              icon="😂"
              title="Funny"
              meta="512 posts"
            />
</Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default Explore;





/* 📦 Category Card Component */
const CategoryCard = ({ icon, title, meta }) => {
  return (
    <div className="bg-white border rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
      <span className="text-3xl">{icon}</span>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{meta}</p>
      </div>
    </div>
  );
};
