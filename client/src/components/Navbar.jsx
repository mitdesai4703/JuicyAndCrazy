import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const { user, setUser, setShowUserLogin, getCartCount, axios } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "All Products", path: "/products" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <nav className="w-full bg-[#003B2F] shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
     
        <NavLink to="/" className="flex-shrink-0">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-12 w-auto hover:scale-105 transition"
          />
        </NavLink>

     
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#D4AF37] text-2xl"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

       
        <div className="hidden lg:flex flex-1 justify-center gap-10 text-base font-semibold text-[#FDF8F0]">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-[#D4AF37] transition duration-200 ${
                  isActive ? "text-[#D4AF37]" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

       
        <div className="flex items-center gap-4" ref={dropdownRef}>
         
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart
              size={24}
              color="#D4AF37"
              className="hover:scale-110 transition"
            />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                {getCartCount()}
              </span>
            )}
          </div>

         
          {user ? (
            <div className="relative">
              <div
                className="w-10 h-10 bg-[#D4AF37] text-[#1a1a1a] font-bold rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                {user.name?.[0]?.toUpperCase() || "U"}
              </div>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 bg-white border rounded-md shadow-xl flex flex-col z-10 text-sm w-44 text-gray-700">
                  <li
                    onClick={() => {
                      navigate("/my-orders");
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={logout}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#D4AF37] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition cursor-pointer hidden lg:inline"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-[#003B2F] text-[#FDF8F0] text-base font-semibold rounded-md shadow-lg py-3">
          <div className="flex flex-col items-start px-4 space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full hover:text-[#D4AF37] transition ${
                    isActive ? "text-[#D4AF37]" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {!user && (
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
                className="bg-[#D4AF37] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
