import React from "react";
import { motion } from "framer-motion";
import { slides } from "../../assets/assets";

const JuicyCarousel = () => {
  return (
    <div className="w-full mx-auto my-12 flex flex-col items-center">
     
      <motion.h2
        className="text-2xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#003B2F] via-[#6B8E23] to-[#A3C293] px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Discover Our Juicy Delights
      </motion.h2>

      
      <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-4 px-4 sm:px-12 snap-x snap-mandatory w-full">
        {slides.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-72 md:w-80 flex flex-col items-center justify-between bg-gradient-to-b from-[#FFF8E1] via-[#FFFCE8] to-[#FDF8F0] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl snap-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ minHeight: "420px" }}
          >
           
            <motion.img
              src={item.src}
              alt={item.title}
              className="w-40 h-40 sm:w-60 sm:h-60 object-contain rounded-xl mb-4 drop-shadow-xl"
              initial={{ scale: 0.8, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            />

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center px-3 py-2 sm:px-4 sm:py-3 bg-white/70 rounded-xl sm:rounded-2xl backdrop-blur-md shadow-md flex flex-col flex-grow"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#003B2F]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JuicyCarousel;
