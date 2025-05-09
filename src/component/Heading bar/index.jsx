import React, { useEffect, useState } from "react";
import DefaultImage from "./../../assets/images/Vector.png";
import Image2 from "./../../assets/images/bx_bx-phone-call.png";
import Image3 from "./../../assets/images/uil_heart-alt.png";
import Image4 from "./../../assets/images/fluent_cart-24-regular.png";
import Image5 from "./../../assets/images/carbon_user.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Heading = () => {
  const [token, setToken] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false); // State for toggling contact info on mobile
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    setToken(storedToken);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
    navigate("/login");
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="bg-[#7E33E0] text-white py-3 sm:py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <button
            className="md:hidden text-white flex items-center gap-2 text-sm"
            onClick={toggleContact}
          >
            <span>{isContactOpen ? "Hide Contact" : "Show Contact"}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isContactOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
              />
            </svg>
          </button>
          <div
            className={`${
              isContactOpen ? "flex" : "hidden"
            } md:flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm sm:text-base`}
          >
            <div className="flex items-center gap-2">
              <img src={DefaultImage} alt="Email Icon" className="w-4 sm:w-5 h-4 sm:h-5" />
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={Image2} alt="Phone Icon" className="w-4 sm:w-5 h-4 sm:h-5" />
              <p>57575757575</p>
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {token ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <p className="text-sm sm:text-base">Welcome, user!</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-red-600 transition text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-2 hover:text-pink-300 transition">
              <p className="text-sm sm:text-base">Login</p>
              <img src={Image5} alt="Login Icon" className="w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
          )}

          <Link to="/like" className="flex items-center gap-2 hover:text-pink-300 transition">
            <p className="text-sm sm:text-base">Wishlist</p>
            <img src={Image3} alt="Wishlist Icon" className="w-4 sm:w-5 h-4 sm:h-5" />
          </Link>

          <Link to="/cart">
            <img
              src={Image4}
              alt="Cart Icon"
              className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;