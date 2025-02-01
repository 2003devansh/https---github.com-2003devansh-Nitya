import React from "react";
import { motion } from "framer-motion";

const Bio = ({ name, bio, philosophy, mission, photo }) => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-yellow-500 mb-10 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet the Astrologer
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={photo}
              alt={name}
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </motion.div>
          <div className="w-full md:w-2/3">
            <motion.h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              Short Bio
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-6">{bio}</p>

            <motion.h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              Philosophy
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-6">{philosophy}</p>

            <motion.h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              Mission
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">{mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
