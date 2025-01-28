import React, { useRef } from "react";
import { motion } from "framer-motion";
import AstrologerProfile from "./AstrologerProfile ";

const services = [
  { id: 1, title: "Personalized Horoscope", description: "Daily, weekly, or monthly horoscopes tailored to your zodiac sign.", icon: "/horoscope.png" },
  { id: 2, title: "Love Compatibility", description: "Discover your compatibility with your partner based on astrology.", icon: "/love.png" },
  { id: 3, title: "Career Guidance", description: "Find the perfect career path aligned with your stars.", icon: "/career.png" },
  { id: 4, title: "Spiritual Healing", description: "Unlock your inner peace with spiritual consultations.", icon: "/spiritual.png" },
  { id: 5, title: "Astrology Reports", description: "Detailed reports to understand your past, present, and future.", icon: "/reports.png" },
  { id: 6, title: "Tarot Reading", description: "Unlock hidden truths through insightful tarot readings.", icon: "/tarot.png" },
  { id: 7, title: "Palmistry", description: "Discover your fate and future through the art of palm reading.", icon: "/palmistry.png" },
  { id: 8, title: "Numerology", description: "Explore the significance of numbers in your life journey.", icon: "/numerology.png" },
  { id: 9, title: "Astrology Workshops", description: "Learn the basics of astrology in our interactive workshops.", icon: "/workshops.png" },
  { id: 10, title: "Compatibility Analysis", description: "Analyze compatibility between friends, partners, or colleagues.", icon: "/compatibility.png" },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold text-center text-yellow-500 mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
          Explore the wide range of astrology services we offer to help you discover insights and guidance for your life journey.
        </p>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-yellow-500 z-10 px-4"
          >
            &lt;
          </button>
          <div ref={scrollRef} className="flex overflow-x-scroll space-x-6 py-6 scrollbar-hide px-10">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-zinc-800 shadow-xl rounded-xl p-6 text-center flex flex-col items-center gap-4 w-96 h-80 hover:scale-105 transform transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-500">
                  <motion.img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-yellow-500">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-yellow-500 z-10 px-4"
          >
            &gt;
          </button>
        </div>
      </div>
      <AstrologerProfile />
    </div>
  );
};

export default Services;
