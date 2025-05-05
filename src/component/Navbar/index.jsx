import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./../../assets/images/uil_search.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-around items-center m-5">
        <div className="flex gap-8">
          <h1 className="font-bold  text-center">Hekto</h1>
          <div className="flex gap-2 text-center">
            <NavLink
              to="/"
              className="text-gray-600"
              activeClassName="text-pink-500 font-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/pages"
              className="text-gray-600"
              activeClassName="text-pink-500 font-bold"
            >
              Pages
            </NavLink>
            <NavLink
              to="/product"
              className="text-gray-600"
              activeClassName="text-pink-500 font-bold"
            >
              Product
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-600"
              activeClassName="text-pink-500 font-bold"
            >
              Blog
            </NavLink>
            <NavLink
              to="/shop"
              className="text-gray-600"
              activeClassName="text-pink-500 font-bold"
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-600"
              activeClassName="text-pink-500 font-bold"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 outline-none w-64"
          />
          <button className="bg-pink-500 p-2">
            <img src={Image} alt="Search Icon" />
          </button>
        </div>
      </div>

     
    </>
  );
}

export default Navbar;
