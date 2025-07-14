import React from "react";
import { motion } from "framer-motion";
import juiceBg from "../../assets/candyimg.png";

const HeroSection = () => {
  return (
    <motion.section
      className="w-full min-h-[85vh] bg-gradient-to-br from-[#FFFCE8] via-[#FDF8F0] to-[#FFE4B5] flex items-center px-6 sm:px-16 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10">
      
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#D4AF37] drop-shadow-xl">
            Welcome to JuicynCrazy
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#003B2F] font-medium">
            Sip bold. Live wild. Stay fresh. Our juicy blends are bursting with
            natural goodness and exotic vibes.
          </p>
          <button className="mt-8 px-8 py-3 bg-[#D4AF37] text-[#003B2F] font-semibold rounded-full shadow-md hover:scale-105 transition duration-300">
            Explore Our Products
          </button>
        </div>

       
        <motion.div
          className="flex-1"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-[500px] h-[300px] md:h-[450px] bg-contain bg-center bg-no-repeat rounded-2xl shadow-2xl"
            style={{ backgroundImage: `url(${juiceBg})` }}
          ></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
