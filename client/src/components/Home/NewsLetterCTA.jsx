import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsletterCTA = () => {
  return (
    <section className="bg-[#FFFCE8] text-[#003B2F] py-20 px-6 sm:px-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-6">
          <FaEnvelopeOpenText className="text-5xl text-[#D4AF37]" />
          <h2 className="text-3xl sm:text-4xl font-bold">Stay Juicy </h2>
        </div>

        <p className="text-base sm:text-lg mb-4 text-[#003B2F]">
          Be the first to know about our freshest launches, exclusive discounts,
          and the coolest flavors — delivered directly to your inbox.
        </p>
        <p className="text-sm sm:text-base text-[#D4AF37] mb-8 italic">
          We promise — no spam, just pure fruit-filled happiness.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 rounded-full
            border text-gray-800 w-full sm:w-72 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#D4AF37] text-[#003B2F] font-semibold rounded-full hover:opacity-90 transition duration-300 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCTA;
