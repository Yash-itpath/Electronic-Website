import React from "react";
import Image from "../../assets/images/Group 124.png";

function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="h-[286px] bg-[#F2F0FF] flex items-center justify-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans px-4">
          Contact Us
        </h1>
      </div>

      {/* Info and Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6 md:px-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl sm:text-3xl font-bold font-josefin text-[#151875]">
            Information About us
          </p>
          <p className="pt-6 text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>

          <div className="flex pt-10 gap-4">
            <span className="w-6 h-6 bg-purple-800 rounded-full"></span>
            <span className="w-6 h-6 bg-pink-600 rounded-full"></span>
            <span className="w-6 h-6 bg-blue-400 rounded-full"></span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-2xl sm:text-3xl font-bold font-josefin text-[#151875]">
            Contact Us
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            {["purple-800", "pink-600", "yellow-400", "green-500"].map((color, i) => (
              <div className="flex gap-4 items-start" key={i}>
                <span className={`w-[45px] h-[45px] bg-${color} rounded-full`}></span>
                <div>
                  <p className="text-[#8A8FB9]">Tel: 877-67-88-99</p>
                  <p className="text-[#8A8FB9]">E-Mail: shop@store.com</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-16 pb-20">
        <div className="max-w-2xl mx-auto pt-8">
          <p className="text-2xl sm:text-3xl font-bold font-josefin text-[#151875]">
            Get In Touch
          </p>
          <p className="pt-4 text-[#8A8FB9]">
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
                placeholder="Type Your Message*"
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

        <div className="flex justify-center items-center">
          <img
            src={Image}
            alt="Contact"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
