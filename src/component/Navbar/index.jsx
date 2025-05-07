import React from "react";
import { NavLink } from "react-router-dom";
import Image from "./../../assets/images/uil_search.png";

function Navbar() {
  return (
    <div className="flex justify-around items-center m-5">
      <div className="flex gap-8">
        <h1 className="font-bold text-3xl text-center">Hekto</h1>
        <div className="flex gap-6 text-center items-center">
          {[
            { name: "Home", path: "/" },
            { name: "Product", path: "/product" },
            { name: "Shop", path: "/shop" },
            { name: "Cart", path: "/cart" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 underline font-bold"
                  : "text-gray-600 hover:text-pink-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
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
  );
}

export default Navbar;
