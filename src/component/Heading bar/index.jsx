import React from "react";
import DefaultImage from "./../../assets/images/Vector.png";
import Image2 from "./../../assets/images/bx_bx-phone-call.png";
import Image3 from "./../../assets/images/uil_heart-alt.png";
import Image4 from "./../../assets/images/fluent_cart-24-regular.png";
import Image5 from "./../../assets/images/carbon_user.png";
// ./../../assets/images/heading.png
import { Link } from "react-router-dom"; 

const Heading = () => {
  return (
    <>
    <div class=" flex justify-around items-center p-4" style={{backgroundColor: "#7E33E0"}}>
      <div
        
      >
        <div className="flex items-center gap-4 ">
          <img src={DefaultImage} alt="" />

          <p className="text-white">mhhasanul@gmail.com</p>
       
          <img src={Image2} alt="" />
          <p className="text-white">57575757575</p>
        </div>
      </div>

      <div className="flex gap-4">
      <Link to="/login" className="flex items-center"> {/* Wrap with Link */}
            <p className="text-white">login</p>
            <img src={Image5} alt="" />
          </Link>
        <div className="flex items-center ">
          <p className="text-white">Wishlist</p>
          <img src={Image3} alt="" />
        </div>
        <div className="flex items-center gap-2">
          <img src={Image4} alt="" />
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Heading;
