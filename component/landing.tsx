"use client";
import { motion } from "framer-motion";
import { FaRocket, FaPlayCircle, FaBook } from "react-icons/fa";

export default function Landing() {
  // ✨ Reusable animation variants
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative bg-[url('/comp.gif')] bg-cover bg-center min-h-screen flex items-center justify-center flex-col px-6 py-10 gap-10 text-white overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content */}
      <motion.div
        variants={container}
        className="relative z-10 flex flex-col items-center text-center gap-8"
      >
        {/* Badge */}
        <motion.p
          variants={item}
          className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold text-white bg-white/20 border border-white/30 shadow-md backdrop-blur-md"
        >
          <FaBook className="text-yellow-400" />
          100+ Students Trained | 15+ Workshops Delivered
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-extrabold text-6xl md:text-7xl leading-tight max-w-4xl"
        >
          Learn React & JavaScript{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-200 bg-clip-text text-transparent animate-gradient">
            1-to-1 from a Real Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-xl md:text-2xl font-medium max-w-2xl text-gray-200 leading-relaxed"
        >
          Master modern web development with personalized mentorship. From
          beginner to advanced, I’ll guide you every step of the way — with real
          projects and career-ready skills.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          {/* Book Demo */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 font-semibold text-black transition-transform duration-300 shadow-lg"
          >
            <FaRocket className="text-lg" />
            Book Free Demo
          </motion.button>

          {/* View Course */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-300 bg-white/10 hover:bg-white/20 transition-all duration-300 font-semibold text-white"
          >
            <FaPlayCircle className="text-lg text-yellow-400" />
            View Course
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
