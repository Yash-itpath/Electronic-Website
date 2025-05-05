import React from "react";
import Image from "../../assets/images/bx_bxl-facebook.png";
import Image2 from "../../assets/images/akar-icons_twitter-fill.png";
import Image3 from "../../assets/images/bx_bxl-instagram-alt.png";

function Footer() {
  return (
    <footer className="bg-[#F6F5FF] text-[#8A8FB9] pt-12 pb-6 ">
      <div className="container mx-auto grid  grid-cols-4 gap-16 px-4">
        {/* Column 1 - Hekto */}
        <div>
          <h2 className="text-[#000] font-bold text-2xl mb-4">Hekto</h2>
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className=" py-2 border rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 sm:rounded-r-md sm:rounded-bl-none rounded-b-md mt-2 sm:mt-0">
              Sign Up
            </button>
          </div>
          <p className="text-sm">Contact Info</p>
          <p className="text-sm">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Column 2 - Categories */}
        <div>
          <h3 className="text-[#000] font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Column 3 - Customer Care */}
        <div>
          <h3 className="text-[#000] font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Column 4 - Pages */}
        <div>
          <h3 className="text-[#000] font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-[#8A8FB9] border-t pt-4 flex flex-col md:flex-row items-center justify-around px-4 gap-y-4">
        <p>©Webecy - All Rights Reserved</p>
        <div className="flex gap-4">
          <span className="w-5 h-5 bg-[#151875] rounded-full flex items-center justify-center overflow-hidden">
            <img src={Image} alt="icon1" className="w-3 h-3" />
          </span>
          <span className="w-5 h-5 bg-[#151875] rounded-full flex items-center justify-center overflow-hidden">
            <img src={Image3} alt="icon2" className="w-3 h-3" />
          </span>
          <span className="w-5 h-5 bg-[#151875] rounded-full flex items-center justify-center overflow-hidden">
            <img src={Image2} alt="icon3" className="w-3 h-3" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
