import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactus from "../assets/contactus.avif";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-[#FDF8F0] text-[#1A1A1A]">
    
      <div
        className="h-[60vh] bg-contain bg-center flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${contactus})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold z-10"
        >
          Contact Us 🍹
        </motion.h1>
      </div>

  
      <section className="px-6 sm:px-12 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
       
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 space-y-6 border border-gray-200 shadow-lg"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B2F]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B2F]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B2F]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-white py-3 rounded-md font-semibold hover:bg-[#d4af37d7] transition cursor-pointer"
            >
               Send Message
            </button>
          </motion.form>

         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-[#003B2F] mb-1">Address</h3>
                <p className="text-sm text-gray-700">
                  123 Tropical Lane, Juice Town, India – 400001
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaPhoneAlt className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-[#003B2F] mb-1">Phone</h3>
                <p className="text-sm text-gray-700">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-[#D4AF37] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-[#003B2F] mb-1">Email</h3>
                <p className="text-sm text-gray-700">support@juicyncrazy.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
