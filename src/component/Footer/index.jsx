
import React from "react";
import Image from "../../assets/images/bx_bxl-facebook.png";
import Image2 from "../../assets/images/akar-icons_twitter-fill.png";
import Image3 from "../../assets/images/bx_bxl-instagram-alt.png";

function Footer() {
  return (
    <footer className="bg-[#F6F5FF] text-[#8A8FB9] pt-8 pb-6 md:pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
         
          <div className="flex flex-col">
            <h2 className="text-[#000] font-bold text-xl md:text-2xl mb-4 font-josefin">
              Hekto
            </h2>
            <div className="flex flex-col sm:flex-row mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-3 py-2 border rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base w-full sm:w-auto"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none mt-2 sm:mt-0 hover:bg-pink-600 transition text-sm md:text-base">
                Sign Up
              </button>
            </div>
            <p className="text-sm mt-2">Contact Info</p>
            <p className="text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-[#000] font-semibold text-lg md:text-xl mb-4 font-josefin">
              Categories
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-pink-500 transition cursor-pointer">
                Laptops & Computers
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Cameras & Photography
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Smart Phones & Tablets
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Video Games & Consoles
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Waterproof Headphones
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-[#000] font-semibold text-lg md:text-xl mb-4 font-josefin">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-pink-500 transition cursor-pointer">
                My Account
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Discount
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Returns
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Orders History
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Order Tracking
              </li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-[#000] font-semibold text-lg md:text-xl mb-4 font-josefin">
              Pages
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="hover:text-pink-500 transition cursor-pointer">
                Blog
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Browse the Shop
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Category
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Pre-Built Pages
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                Visual Composer Elements
              </li>
              <li className="hover:text-pink-500 transition cursor-pointer">
                WooCommerce Pages
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base px-4">
          <p>©Webecy - All Rights Reserved</p>
          <div className="flex gap-4">
            <span className="w-6 h-6 bg-[#151875] rounded-full flex items-center justify-center overflow-hidden">
              <img src={Image} alt="Facebook" className="w-4 h-4" />
            </span>
            <span className="w-6 h-6 bg-[#151875] rounded-full flex items-center justify-center overflow-hidden">
              <img src={Image3} alt="Instagram" className="w-4 h-4" />
            </span>
            <span className="w-6 h-6 bg-[#151875] rounded-full flex items-center justify-center overflow-hidden">
              <img src={Image2} alt="Twitter" className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;