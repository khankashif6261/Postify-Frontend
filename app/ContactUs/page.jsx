"use client";
import React from "react";
import Navbar from "@/app/components/navbar"
const ContactUs = () => {
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
    <Navbar/>
    <div className="min-h-screen bg-linear-to-br from-[#f8fbfa] via-white to-[#eef7f4] relative overflow-hidden">

      {/* Background Waves */}
      <div className="absolute bottom-0 left-0 w-full h-72 bg-linear-to-r from-[#cfe9e2] to-[#e6f4f1] rounded-t-[100%] opacity-60 blur-2xl"></div>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        {/* Heading */}
        <div className="mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            Contact <span className="text-[#3aa58a]">Us</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Have any questions, feedback, or need assistance? <br />
            We’re here to help!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT INFO CARDS */}
          <div className="space-y-6">

            {/* Email */}
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#e6f4f1] rounded-full flex items-center justify-center text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  Email Us
                </h3>
                <p className="text-[#3aa58a]">support@postify.com</p>
              </div>
            </div>

            {/* Call */}
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#e6f4f1] rounded-full flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  Call Us
                </h3>
                <p className="text-gray-600">+91 9664075941</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#e6f4f1] rounded-full flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  Mumbai, Maharashtra <br />
                  
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3aa58a]"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3aa58a]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3aa58a]"
              />

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3aa58a]"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold bg-linear-to-r from-[#3aa58a] to-[#58c1a7] hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  </>
  );
};

export default ContactUs;
