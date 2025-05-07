import React from "react";

import Image from "../../assets/images/Group 124.png";


function Contact() {
  return (
    <>
      <div className="pr-14 h-[286px]" 
       style={{ backgroundColor: "#F2F0FF" }}>
        <h1 className="max-w-xl max-auto px-36 py-24 text-3xl font-bold text-2xl font-sans">
          Contact Us
        </h1>
        <p></p>
      </div>

      <div className="grid grid-cols-2 py-24 ">
        <div className=" max-w-xl mx-auto px-10 ">
          <p className="text-3xl font-bold font-josefin text-[#151875]">
            Information About us
          </p>
          <p className="w-[550px] pt-6 text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>

          <div className="flex pt-10 gap-4">
            <p className="w-[25px] h-[25px] bg-purple-800 rounded-full"></p>
            <p className="w-[25px] h-[25px] bg-pink-600 rounded-full"></p>
            <p className="w-[25px] h-[25px] bg-blue-400 rounded-full"></p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold font-josefin text-[#151875]">
            Contact Us
          </p>
          <div className="grid grid-cols-2 pt-8">
            <div className="flex gap-4 ">
              <p className="w-[45px] h-[45px] bg-purple-800 rounded-full"></p>
              <div>
                <p className="text-[#8A8FB9]">Tel: 877-67-88-99</p>
                <p className="text-[#8A8FB9]">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex gap-4 ">
              <p className="w-[45px] h-[45px] bg-pink-600 rounded-full"></p>
              <div>
                <p className="text-[#8A8FB9]">Tel: 877-67-88-99</p>
                <p className="text-[#8A8FB9]">E-Mail: shop@store.com</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-8">
            <div className="flex gap-4 ">
              <p className="w-[45px] h-[45px] bg-yellow-400 rounded-full"></p>
              <div>
                <p className="text-[#8A8FB9]">Tel: 877-67-88-99</p>
                <p className="text-[#8A8FB9]">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex gap-4 ">
              <p className="w-[45px] h-[45px] bg-green-500 rounded-full"></p>
              <div>
                <p className="text-[#8A8FB9]">Tel: 877-67-88-99</p>
                <p className="text-[#8A8FB9]">E-Mail: shop@store.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="grid grid-cols-2 px-16 pb-40">
        <div className="max-w-xl mx-auto pt-8 ">
          <p className="text-3xl font-bold font-josefin text-[#151875]">
            Get In Touch
          </p>
          <p className="w-[550px] pt-4 text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          
            <div className="pt-8">
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail*"
                    className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <textarea
                  rows="5"
                  placeholder="Type Your Messege*"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-all"
                >
                  Send Mail
                </button>
              </form>
            </div>
          
        </div>
        <div>
          <img src={Image} alt="" className="w-[723px]"/>
        </div>
      </div>

     
    </>
  );
}

export default Contact;
