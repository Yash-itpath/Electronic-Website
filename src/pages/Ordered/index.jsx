import React from "react";
import Image from "./../../assets/images/Vector 15.png";
import Image2 from "./../../assets/images/clock 1.png";
import Image3 from "./../../assets/images/checklist 1.png";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex justify-center items-center pt-12 pb-20 px-4 sm:px-8">
      <div className="relative border-l-2 border-b-2 border-gray-300 border-dashed w-full max-w-md sm:max-w-xl h-80 sm:h-[326px] bg-white shadow-md rounded-md">
        
        {/* Top Left Icon */}
        <div className="absolute -top-6 -left-6 w-12 h-12">
          <img src={Image2} alt="Clock" className="w-full h-full object-contain" />
        </div>

        {/* Main Content */}
        <div className="flex justify-center items-center h-full px-4">
          <div className="text-center flex flex-col items-center">
            <img
              src={Image}
              alt="Checkmark"
              className="w-12 h-12 rounded-full border-4 border-gray-300 p-2"
            />
            <p className="mt-4 font-semibold text-lg text-blue-900">
              Your Order Is Completed!
            </p>
            <p className="text-gray-600 text-sm mt-2 px-2 sm:px-6">
              Thank you for your order! Your order is being processed and will
              be completed within 3–6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mt-6 hover:bg-pink-600 transition"
              onClick={() => navigate("/product")}
            >
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Bottom Right Icon */}
        <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16">
          <img src={Image3} alt="Checklist" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Order;
