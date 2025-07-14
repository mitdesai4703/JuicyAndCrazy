import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003B2F] text-[#FDF8F0] pt-16 pb-6 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
       
        <div className="space-y-2">
          <img
            src={assets.logo}
            alt="Juicy n Crazy"
            className="h-30 w-60 -mt-10 ml-5"
          />
          <p className="text-sm text-[#FFFCE8] leading-relaxed">
            Bold flavors, natural ingredients, and juicy fun – that’s our vibe.
            <br />
            Whether you're chilling or grinding, we bring the freshness to your
            routine.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#D4AF37]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-[#D4AF37]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-[#D4AF37]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#D4AF37]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faq" className="hover:text-[#D4AF37]">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#D4AF37]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#D4AF37]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-[#D4AF37]">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
            Connect With Us
          </h3>
          <div className="flex gap-4 text-[#FDF8F0] text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D4AF37]"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:info@juicyncrazy.com"
              className="hover:text-[#D4AF37]"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

    
      <div className="mt-10 border-t border-[#FDF8F0]/20 pt-6 text-center text-sm text-[#FFFCE8]">
        &copy; {new Date().getFullYear()} Juicy n Crazy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
