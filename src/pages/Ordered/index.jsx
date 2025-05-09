import React from "react";
import Image from "./../../assets/images/Vector 15.png";
import Image2 from "./../../assets/images/clock 1.png";
import Image3 from "./../../assets/images/checklist 1.png";
import { useNavigate } from "react-router-dom";

function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto flex justify-center place-items-center pt-16 pb-24 px-24">
        
        <div
          className="relative border-l-2 border-b-2 border-gray-300 border-dashed"
          style={{ width: "625px", height: "326px" }}
        >
           
          <div className="absolute -top-8 -left-8">
            <img src={Image2} alt="Clock" />
          </div>

          
          <div className="flex justify-center items-center h-full">
            <div className="text-center flex flex-col items-center">
              <img
                src={Image}
                alt="Checkmark"
                className="w-12 h-12 rounded-full border-4 border-gray-300 p-2"
              />
              <p className="mt-4 font-semibold text-lg text-blue-900">
                Your Order Is Completed!
              </p>
              <p className="text-gray-600 text-sm mt-2 px-6">
                Thank you for your order! Your order is being processed and will
                be completed within 3–6 hours. You will receive an email
                confirmation when your order is completed.
              </p>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded mt-6"
                onClick={() => navigate("/product")} 
              >
                Continue Shopping
              </button>
            </div>
          </div>

        
          <div className="absolute -bottom-8 -right-8">
            <img src={Image3} alt="Sofa" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
