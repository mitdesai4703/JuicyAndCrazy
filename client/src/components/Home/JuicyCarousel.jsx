import React from "react";
import { motion } from "framer-motion";
import { slides } from "../../assets/assets";

const JuicyCarousel = () => {
  return (
    <div className="w-full mx-auto my-12 flex flex-col items-center">
      
      <motion.h2
        className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#003B2F] via-[#6B8E23] to-[#A3C293]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Discover Our Juicy Delights
      </motion.h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-12 snap-x snap-mandatory">
        {slides.map((item, index) => (
         <motion.div
  key={index}
  className="flex-shrink-0 w-80 flex flex-col items-center justify-between bg-gradient-to-b from-[#FFF8E1] via-[#FFFCE8] to-[#FDF8F0] p-6 rounded-3xl shadow-2xl snap-center"
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  style={{ minHeight: "460px" }} 
>
  
  <motion.img
    src={item.src}
    alt={item.title}
    className="w-70 h-70 object-contain rounded-xl mb-4 drop-shadow-xl" 
    initial={{ scale: 0.8, rotate: -5 }}
    whileInView={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.6, type: "spring" }}
  />

 
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-center px-4 py-3 bg-white/70 rounded-2xl backdrop-blur-md shadow-md flex flex-col flex-grow"
  >
    <h3 className="text-lg font-bold text-[#003B2F]">{item.title}</h3>
    <p className="text-sm text-gray-700 mt-2 leading-relaxed">{item.desc}</p>
  </motion.div>
</motion.div>

        ))}
      </div>
    </div>
  );
};

export default JuicyCarousel;
