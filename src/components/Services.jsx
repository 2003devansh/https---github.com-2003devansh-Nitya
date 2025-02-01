import React, { useRef } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const services = [
  { id: 1, title: "Personalized Horoscope", description: "Daily, weekly, or monthly horoscopes tailored to your zodiac sign.", additionalInfo: "Accurate planetary analysis included.", icon: "/horoscope.png" },
  { id: 2, title: "Love Compatibility", description: "Discover your compatibility with your partner based on astrology.", additionalInfo: "Find your soulmate match!", icon: "/love.png" },
  { id: 3, title: "Career Guidance", description: "Find the perfect career path aligned with your stars.", additionalInfo: "Expert insights for your growth.", icon: "/career.png" },
  { id: 4, title: "Spiritual Healing", description: "Unlock your inner peace with spiritual consultations.", additionalInfo: "Healing sessions available.", icon: "/spiritual.png" },
  { id: 5, title: "Astrology Reports", description: "Detailed reports to understand your past, present, and future.", additionalInfo: "Personalized PDF reports.", icon: "/reports.png" },
  { id: 6, title: "Tarot Reading", description: "Unlock hidden truths through insightful tarot readings.", additionalInfo: "Online & offline sessions.", icon: "/tarot.png" },
  { id: 7, title: "Palmistry", description: "Discover your fate and future through the art of palm reading.", additionalInfo: "Hand analysis from experts.", icon: "/palmistry.png" },
  { id: 8, title: "Numerology", description: "Explore the significance of numbers in your life journey.", additionalInfo: "Your lucky number decoded!", icon: "/numerology.png" },
  { id: 9, title: "Astrology Workshops", description: "Learn the basics of astrology in our interactive workshops.", additionalInfo: "Live sessions with astrologers.", icon: "/workshops.png" },
  { id: 10, title: "Compatibility Analysis", description: "Analyze compatibility between friends, partners, or colleagues.", additionalInfo: "100% astrologer-verified.", icon: "/compatibility.png" },
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
              <Card key={service.id} service={service} />
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
    </div>
  );
};

export default Services;
