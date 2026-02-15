"use client";

import { motion } from "framer-motion";

export default function FullScreenLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e9e8] p-4">
     
      <div className="w-full max-w-5xl h-auto md:h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        <div className="w-full md:w-1/2 bg-emerald-500 flex flex-col items-center justify-center relative py-16 md:py-0">
          
          <motion.div
            className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-emerald-400 opacity-30 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 border-4 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          <motion.h1
            className="text-white text-2xl md:text-3xl font-bold tracking-widest mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Postify
          </motion.h1>

          <p className="text-white/80 text-sm mt-2 text-center px-6 md:px-0">
            Preparing your experience...
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 bg-[#f8faf9] py-16 md:py-0">


          <motion.h2
            className="text-emerald-500 text-xl md:text-2xl font-semibold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading
          </motion.h2>


          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 md:w-3 h-10 md:h-12 bg-emerald-500 rounded-full"
                animate={{ scaleY: [1, 2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="w-40 md:w-56 h-2 bg-emerald-100 rounded-full overflow-hidden">
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