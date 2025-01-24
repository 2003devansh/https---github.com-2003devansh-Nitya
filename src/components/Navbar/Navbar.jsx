import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const socialLinks = [
    { id: 1, href: "#", src: "/facebook.png", alt: "Facebook" },
    { id: 2, href: "#", src: "/INSTAGRAM.png", alt: "Instagram" },
    { id: 3, href: "#", src: "/X.png", alt: "Twitter/X" },
  ];

  return (
    <>
      <div className='h-screen py-4'>
        <div className='wrapper max-w-[1200px] mx-auto flex items-center justify-between'>
          <motion.span
          intial={{ opacity: 0, y: 0.5 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{duration: 1 }}
           className="text-2xl font-bold text-white">NITYA</motion.span>
          <div className='socials flex gap-6'>
            {socialLinks.map(({ id, href, src, alt }) => (
              <a 
                key={id} 
                href={href} 
                className="hover:scale-110 transition-transform duration-300"
              >
                <img className="h-auto max-h-10" src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
