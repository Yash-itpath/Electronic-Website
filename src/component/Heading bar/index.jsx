import React, { useEffect, useState } from "react";
import DefaultImage from "./../../assets/images/Vector.png";
import Image2 from "./../../assets/images/bx_bx-phone-call.png";
import Image3 from "./../../assets/images/uil_heart-alt.png";
import Image4 from "./../../assets/images/fluent_cart-24-regular.png";
import Image5 from "./../../assets/images/carbon_user.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Heading = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // detect route changes

  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    setToken(storedToken);
  }, [location]); // re-check token on every route change

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setToken(null); // update local state
    navigate("/login");
  };

  return (
    <div
      className="flex justify-around items-center p-4"
      style={{ backgroundColor: "#7E33E0" }}
    >
      <div className="flex items-center gap-4">
        <img src={DefaultImage} alt="" />
        <p className="text-white">mhhasanul@gmail.com</p>
        <img src={Image2} alt="" />
        <p className="text-white">57575757575</p>
      </div>

      <div className="flex gap-4 items-center">
        {token ? (
          <div className="flex items-center gap-2">
            <p className="text-white">Welcome, user!</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="flex items-center">
            <p className="text-white">Login</p>
            <img src={Image5} alt="Login" />
          </Link>
        )}

        <Link to="/like" className="flex items-center">
          <p className="text-white">Wishlist</p>
          <img src={Image3} alt="" />
        </Link>

        <Link to="/cart">
          <img src={Image4} alt="Go to Cart" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Heading;
