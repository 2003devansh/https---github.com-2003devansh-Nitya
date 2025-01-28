// Card.jsx
import React from "react";
import { motion } from "framer-motion";

const Card = ({ service }) => {
  return (
    <motion.div
      className="bg-zinc-800 shadow-lg rounded-2xl p-8 text-center flex flex-col items-center gap-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 w-72"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-yellow-500 overflow-hidden">
        <img
          src={service.icon}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-yellow-500">{service.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

export default Card;
