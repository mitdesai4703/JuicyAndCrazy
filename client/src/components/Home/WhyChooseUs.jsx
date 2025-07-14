import React from "react";
import { whyChooseUsFeatures } from "../../assets/assets";
import { FaLeaf, FaShippingFast, FaRecycle, FaIceCream } from "react-icons/fa";

const iconMap = {
  FaLeaf: <FaLeaf size={36} color="#003B2F" />,
  FaShippingFast: <FaShippingFast size={36} color="#003B2F" />,
  FaRecycle: <FaRecycle size={36} color="#003B2F" />,
  FaIceCream: <FaIceCream size={36} color="#003B2F" />,
};

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-tr from-[#FFF8E1] via-[#FFFCE8] to-[#FDF8F0] py-20 px-6 sm:px-16 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003B2F] mb-12">
        Why JuicynCrazy?
      </h2>
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUsFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white/40 rounded-xl shadow-xl p-8 backdrop-blur-md hover:bg-white/60 transition duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {iconMap[feature.icon]}
            </div>
            <h3 className="text-xl font-bold text-[#003B2F] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
