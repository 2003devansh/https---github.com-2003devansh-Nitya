import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { id: 1, href: "#", src: "/facebook.png", alt: "Facebook" },
    { id: 2, href: "#", src: "/INSTAGRAM.png", alt: "Instagram" },
    { id: 3, href: "#", src: "/X.png", alt: "Twitter/X" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#800000]/90 shadow-lg backdrop-blur-md" : "bg-[#800000]"
      }`}
    >
      <div className="wrapper max-w-screen-xl mx-auto flex items-center py-4 justify-between px-6">
        {/* Branding */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-[#FFD700] font-['Playfair Display'] tracking-wide drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            NITYA
          </span>
        </motion.span>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="links flex gap-10"
        >
          {["Home", "About", "Services", "Zodiac Signs", "Contact"].map((elem, index) => (
            <motion.a
              key={index}
              href={`#${elem.toLowerCase().replace(" ", "")}`}
              className="text-sm font-['Playfair Display'] text-[#FFD700] flex items-center gap-1 hover:text-orange-400 transition-colors relative"
              whileHover={{ scale: 1.1, color: "#FFA500" }}
              whileTap={{ scale: 0.9 }}
            >
              {elem}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <div className="socials flex gap-6">
          {socialLinks.map(({ id, href, src, alt }) => (
            <motion.a
              key={id}
              href={href}
              className="hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                className="h-auto max-h-8 drop-shadow-lg"
                src={src}
                alt={alt}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: id * 0.2 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar; 
