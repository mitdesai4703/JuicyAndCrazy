import React from "react";
import { motion } from "framer-motion";
import bottleImg from "../../assets/misson.jpg";
import fruitImg from "../../assets/fruits.avif";
import ImageWithDecorativeBorder from "../ImageWithDecorativeBorder";

const AboutContent = () => (
  <>
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto mb-20"
    >
      <h2 className="text-3xl font-bold text-[#003B2F] mb-4">Who We Are</h2>
      <p className="text-lg text-gray-800 leading-relaxed">
        At <strong>Juicy n Crazy</strong>, we're not just a juice brand — we're a flavor revolution.
        Our journey began with one goal: to craft drinks that are bold, natural, and unapologetically fresh.
        Every bottle is packed with handpicked fruits, herbs, and a crazy passion for health & taste.
      </p>
    </motion.section>

    <motion.section
      className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mb-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <ImageWithDecorativeBorder src={bottleImg} alt="Juice Bottle" className="w-[320px] md:w-[700px]" />
      <div>
        <h2 className="text-3xl font-bold text-[#003B2F] mb-4">Our Mission</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          We aim to blend fun and freshness in every sip while promoting healthy living.
          Whether you're chilling at the beach or grinding at work, Juicy n Crazy is your
          go-to energy boost — minus the guilt, and full of vibes.
        </p>
      </div>
    </motion.section>

    <motion.section
      className="max-w-5xl mx-auto mb-20"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-[#003B2F] mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-800 space-y-3">
        <li>🌿 100% natural ingredients – No additives, no BS.</li>
        <li>🥭 Unique exotic flavors that excite your taste buds.</li>
        <li>🌍 Eco-friendly packaging – because the planet matters.</li>
        <li>🚀 Fast delivery and easy online ordering.</li>
      </ul>
    </motion.section>

    <motion.section
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#003B2F] mb-4">What’s Next?</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          We're expanding to more cities and bringing new seasonal blends every month.
          Keep an eye out for our <strong>Crazy Cold Combos</strong>, <strong>Limited Edition Brews</strong>, and the
          <strong> Juicy n Crazy Challenge</strong>!
        </p>
      </div>
      <ImageWithDecorativeBorder src={fruitImg} alt="Fruits" className="w-[320px] md:w-[500px]" />
    </motion.section>
  </>
);

export default AboutContent;
