import React from "react";
import { motion } from "framer-motion";
import juiceBg from "../../assets/juicy.avif";

const AboutHero = () => (
  <motion.div
    className="w-full h-[80vh] bg-cover bg-center rounded-3xl shadow-xl mb-16 flex items-center justify-center"
    style={{ backgroundImage: `url(${juiceBg})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="relative text-center text-white z-10">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-[#D4AF37] drop-shadow-lg">
        About Juicy n Crazy 🍹
      </h1>
      <p className="mt-4 text-xl font-medium text-white">Fresh. Wild. Natural. Fun.</p>
    </div>
  </motion.div>
);

export default AboutHero;
