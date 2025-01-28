import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/new_background.webp)" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-800 opacity-90"></div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          Welcome to 
          <span className="text-yellow-500 ml-2">Nitya Astrology</span>
        </h1>
        <p className="text-xl md:text-2xl text-yellow-500 font-semibold mb-4">
          <Typewriter
            words={[
              "Discover Your Zodiac Destiny.",
              "Unlock the Secrets of the Stars.",
              "Astrology Insights Tailored for You.",
              "Explore Love Compatibility and More!",
              "Find Guidance in the Celestial Realm."
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </p>
        <motion.a
          href="#services"
          className="mt-6 inline-block bg-yellow-500 text-black text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Now
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
