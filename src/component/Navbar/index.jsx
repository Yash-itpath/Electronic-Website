import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "./../../assets/images/uil_search.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="font-bold text-2xl sm:text-3xl text-[#1A0B5B]">Hekto</h1>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-gray-600 hover:text-pink-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links and Search Bar */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto absolute md:static top-16 left-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-10`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
            {[
              { name: "Home", path: "/" },
              { name: "Product", path: "/product" },
              { name: "Shop", path: "/shop" },
              { name: "Cart", path: "/ncart" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500 underline font-bold text-sm md:text-base"
                    : "text-gray-600 hover:text-pink-500 text-sm md:text-base"
                }
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full md:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none w-full md:w-48 lg:w-64 text-sm md:text-base"
            />
            <button className="bg-pink-500 p-2 hover:bg-pink-600 transition">
              <img src={Image} alt="Search Icon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;