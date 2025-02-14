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
            <p className="text-gray-300 leading-relaxed mb-6">
              {bio}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With years of experience in astrology, {name} has guided numerous individuals toward clarity and enlightenment. Specializing in Vedic astrology, numerology, and horoscope analysis, {name} blends ancient wisdom with modern insights to provide comprehensive astrological solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Having studied under renowned astrologers and delved deep into celestial movements, {name} has developed a keen understanding of planetary influences and their impact on human lives. Their personalized approach ensures each reading is unique and deeply insightful.
            </p>

            <motion.h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              Philosophy
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {philosophy}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              {name} believes that astrology is not about predicting an unchangeable fate but about empowering individuals with knowledge. By understanding cosmic energies, people can make informed decisions and shape their own destinies.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every planetary alignment offers an opportunity for growth and transformation. Through careful analysis and intuitive guidance, {name} aims to illuminate these opportunities for their clients, helping them align their lives with their higher purpose.
            </p>

            <motion.h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              Mission
            </motion.h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {mission}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The mission of {name} is to bridge the gap between traditional astrology and contemporary life. Through in-depth consultations, workshops, and online sessions, they aim to make astrological wisdom accessible to all.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By guiding individuals through life’s uncertainties with compassion and expertise, {name} seeks to bring peace, purpose, and prosperity to everyone they assist. The ultimate goal is to inspire self-awareness, resilience, and a deep connection with the universe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
