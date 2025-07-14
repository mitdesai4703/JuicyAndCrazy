import React from "react";
import { categories } from "../../assets/assets";
import { Link } from "react-router-dom";

const LatestProduct = () => {
  return (
    <section className="px-6 sm:px-16 py-16 bg-gradient-to-br from-[#FFFCE8] via-[#FFF9DC] to-[#FFF4CC] text-[#003B2F]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#D4AF37] drop-shadow-md mb-14">
          ✨ Discover Our Latest Icepop ✨
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {categories.slice(0, 5).map((item, index) => (
  <Link
    to={`/product/${item.text.replace(/\s+/g, "-").toLowerCase()}`}
    key={index}
    className="bg-white/40 backdrop-blur-md border border-[#ffffff20] shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-white/60"
    style={{ backgroundColor: item.bgColor }}
  >
    <div className="relative w-36 h-36 sm:w-40 sm:h-40 mb-4 transition-transform duration-300 group-hover:-translate-y-1">
      <img
        src={item.image}
        alt={item.text}
        className="rounded-full w-full h-full object-contain shadow-inner"
      />
    </div>
    <h3 className="text-xl font-semibold text-[#003B2F]">{item.text}</h3>
    <p className="text-sm text-[#1A1A1A] opacity-70 mt-2">
      Bursting with flavor & chill vibes ❄️
    </p>
    <span className="mt-4 inline-block text-sm text-[#D4AF37] font-bold transition-all duration-300 hover:underline hover:tracking-wide">
      Explore →
    </span>
  </Link>
))}

        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
