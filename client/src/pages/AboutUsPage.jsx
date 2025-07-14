import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutContent from "../components/AboutUs/AboutContent";
import JoinMovement from "../components/AboutUs/JoinMovement";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FDF8F0] to-[#FFFCE8] text-[#1A1A1A] px-6 sm:px-16 py-10 overflow-hidden">
      <AboutHero />
      <AboutContent />
      <JoinMovement />
    </div>
  );
};

export default AboutUs;
