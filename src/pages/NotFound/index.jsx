import React from "react";
import Image from "./../../assets/images/Group 123.png";
import { useNavigate } from "react-router-dom";

function NFound() {
    const navigate = useNavigate();
  return (
    
    <>
      <div >
        <div className="container flex  justify-center">
        <img src={Image} alt="" />
        </div>
        <div className="flex justify-center mb-40">
      <button
        onClick={() => navigate("/")}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Back to Home
      </button>
    </div>
      </div>
    </>
  );
}

export default NFound;
