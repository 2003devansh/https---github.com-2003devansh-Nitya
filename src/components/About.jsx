import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-gradient-to-b from-[#2a0c0c] to-[#3b1515] py-20 px-10 text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-yellow-500 drop-shadow-lg tracking-wide">
          Meet Your Guiding Star
        </h2>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Unlock the wisdom of the cosmos with Nitya Astrology. Let celestial insights guide you toward self-discovery, love, and prosperity.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Astrologer Image */}
        <motion.div
          className="relative flex-shrink-0 w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden shadow-[0_0_80px_20px_rgba(255,223,0,0.5)] border-4 border-yellow-500"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/astrologer.jpg"
            alt="Astrologer"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-yellow-500 opacity-20 rounded-full animate-pulse"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-bold mb-6 text-yellow-500 drop-shadow-lg tracking-wide">
            Navigating the Stars with You
          </h3>
          <p className="text-gray-300 text-lg leading-8">
            With years of astrological expertise, our guiding force, <span className="text-yellow-400 font-semibold">Gaurvi</span>, has empowered countless individuals with cosmic wisdom.
          </p>
          <p className="mt-6 text-gray-400 text-lg leading-8">
            She integrates ancient Vedic astrology with modern insight to craft deeply personalized guidance tailored for your life’s journey.
          </p>
          <button 
            onClick={() => navigate('/Services')}
            className="mt-8 px-8 py-3 bg-yellow-500 text-zinc-900 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300"
          >
            Discover Your Destiny
          </button>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-400 text-lg italic">"The universe whispers its secrets—listen, and find your path."</p>
      </div>
    </div>
  );
};

export default About;
