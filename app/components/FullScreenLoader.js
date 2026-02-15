"use client";

import { motion } from "framer-motion";

export default function FullScreenLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e9e8]">
      {/* Card Container */}
      <div className="w-[900px] h-[500px] bg-white rounded-3xl shadow-2xl flex overflow-hidden">

        {/* Left Emerald Panel */}
        <div className="w-1/2 bg-emerald-500 flex flex-col items-center justify-center relative">
          
          {/* Animated Glow Circle */}
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-emerald-400 opacity-30 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Spinner */}
          <motion.div
            className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          {/* Brand */}
          <motion.h1
            className="text-white text-3xl font-bold tracking-widest mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Postify
          </motion.h1>

          <p className="text-white/80 text-sm mt-2">
            Preparing your experience...
          </p>
        </div>

        {/* Right Light Panel */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-8 bg-[#f8faf9]">

          {/* Loading Text */}
          <motion.h2
            className="text-emerald-500 text-2xl font-semibold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading
          </motion.h2>

          {/* Animated Bars */}
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-12 bg-emerald-500 rounded-full"
                animate={{
                  scaleY: [1, 2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-56 h-2 bg-emerald-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
