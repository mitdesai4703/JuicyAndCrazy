import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../assets/assets"; 

const scrollingTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-[#FFFCE8] py-20 px-6 sm:px-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003B2F]">
          What Our Customers Say
        </h2>
      </div>

      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, 
        }}
      >
        {scrollingTestimonials.map((t, index) => (
          <div
            key={index}
            className="w-[300px] flex-shrink-0 bg-white/60 rounded-xl shadow-md p-6"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-[#D4AF37]"
              />
              <p className="text-sm text-gray-800 italic mb-2">"{t.message}"</p>
              <p className="text-[#D4AF37] font-semibold">— {t.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
