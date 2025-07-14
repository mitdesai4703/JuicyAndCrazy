import React from "react";
import { motion } from "framer-motion";

const JoinMovement = () => (
  <motion.section
    className="text-center bg-[#FFF8E1] py-20 px-6 rounded-xl shadow-inner max-w-5xl mx-auto mb-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-[#003B2F] mb-4">Join The Movement</h2>
    <p className="text-gray-800 text-lg mb-6">
      Ready to sip differently? Follow us on social, share your crazy moments,
      and become part of our juicy tribe.
    </p>
    <button className="px-8 py-3 bg-[#D4AF37] text-[#003B2F] font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300">
      📸 Follow on Instagram
    </button>
  </motion.section>
);

export default JoinMovement;
