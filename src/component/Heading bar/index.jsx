import React, { useContext, useEffect, useState } from "react";
import DefaultImage from "./../../assets/images/Vector.png";
import Image2 from "./../../assets/images/bx_bx-phone-call.png";
import Image3 from "./../../assets/images/uil_heart-alt.png";
import Image4 from "./../../assets/images/fluent_cart-24-regular.png";
import Image5 from "./../../assets/images/carbon_user.png";
// ./../../assets/images/heading.png
import { Link } from "react-router-dom";
import { PostContext } from "../../Context/PostContext";

const Heading = () => {
  const { token, setToken } = useContext(PostContext);

  // Sync token with localStorage on mount (optional, in case token is set elsewhere)
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      setToken(storedToken); // Update context if token exists in localStorage
    }
  }, [setToken, token]);

  return (
    <>
      <div
        class=" flex justify-around items-center p-4"
        style={{ backgroundColor: "#7E33E0" }}
      >
        <div>
          <div className="flex items-center gap-4 ">
            <img src={DefaultImage} alt="" />

            <p className="text-white">mhhasanul@gmail.com</p>

            <img src={Image2} alt="" />
            <p className="text-white">57575757575</p>
          </div>
        </div>

        <div className="flex gap-4">
        {token ? (
        <div>
          <p className="text-white">Welcome, User!</p>
        </div>
      ) : (
        <div>
          <Link to="/login" className="flex items-center">
            <p className="text-white">login</p>
            <img src={Image5} alt="Login" />
          </Link>
        </div>
      )}

          <div className="flex items-center ">
            <Link to="/like" className="flex items-center">
              <p className="text-white">Wishlist</p>
              <img src={Image3} alt="" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/cart">
              <img src={Image4} alt="Go to Cart" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
