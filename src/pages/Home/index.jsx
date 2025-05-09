import React, { useEffect, useRef, useState } from "react";
import { Pagination } from "@mantine/core";
import Image from "./../../assets/images/image 32.png";
import Image2 from "./../../assets/images/header text.png";
import Image3 from "./../../assets/images/sofa promotional header.png";
import Image8 from "./../../assets/images/free-delivery 1.png";
import Image9 from "./../../assets/images/cashback 1.png";
import Image10 from "./../../assets/images/premium-quality 1.png";
import Image11 from "./../../assets/images/Group.png";
import Image12 from "./../../assets/images/Group 153.png";
import Image13 from "./../../assets/images/box for image.png";
import Image14 from "./../../assets/images/box for image 1.png";
import Image15 from "./../../assets/images/box for image 2.png";
import Image16 from "./../../assets/images/box for image 3.png";
import Image17 from "./../../assets/images/image 1162.png";
import Image18 from "./../../assets/images/image 1161.png";
import Image19 from "./../../assets/images/image 30.png";
import Image20 from "./../../assets/images/Group 154.png";
import Image21 from "./../../assets/images/Rectangle 102.png";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../ Redux/slice/productSlice";
import { useNavigate } from "react-router-dom";
import Banner from "../../component/banner";
import AddtoCart from "../../component/AddtoCart";
import Like from "../../component/Like";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const navigate = useNavigate();

  const containerRef = useRef(null);


  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      dispatch(addToCart(product));
      alert("Added to cart!");
    } else {
      navigate("/login");
    }
  };


  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="pr-14" style={{ backgroundColor: "#F2F0FF" }}>
        <div className="flex justify-around ">
          <div className="">
            <img src={Image} alt="" className="" />
            <p className="text-pink-500 h-4 w-4 ml-28 my-20 rounded-full bg-pink-500"></p>
          </div>
          <div className="py-40 pr-16">
            <img src={Image2} alt="" />
            <button className="bg-pink-500 p-2 text-white my-6 border rounded">
              Shop Now
            </button>
          </div>
          <div className="">
            <img src={Image3} alt="" className="items-center py-6" />
          </div>
        </div>
      </div>

      <div className="mt-14" style={{ color: "#1A0B5B" }}>
        <div className="flex justify-center">
          <p className="font-josefin text-3xl font-bold">Featured Products</p>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <div className="relative w-full max-w-[1100px] mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            ▶
          </button>

          <div
            ref={containerRef}
            className="flex flex-nowrap overflow-x-auto no-scrollbar gap-6 px-4 py-4 scroll-smooth"
          >
            {products.length === 0 && !loading ? (
              <p className="text-center w-full">No products found</p>
            ) : (
              products.map((item, index) => (
                <div
                  key={item.id || index}
                  className="bg-white border rounded-xl shadow-md flex-shrink-0 w-[250px] duration-300 hover:shadow-xl relative group"
                >
                  <div className="h-56 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain max-h-full"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-start justify-end p-2 space-x-2 transition-all">
                     <Like product={item} />
                      <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
                        🔍
                      </button>
                      <AddtoCart  product={item} />
                    </div>
                  </div>

                  <div className="p-4 text-center space-y-1">
                    <p className="font-semibold text-blue-900">{item.title}</p>
                    <div className="flex justify-center space-x-1">
                      <span className="h-1 w-4 bg-teal-400" />
                      <span className="h-1 w-4 bg-pink-500" />
                      <span className="h-1 w-4 bg-blue-900" />
                    </div>
                    <p className="text-gray-500 text-sm">Code - {item.id}</p>
                    <p className="text-gray-800 font-bold">${item.price}</p>
                    {item.rating && (
                      <p className="text-gray-600 text-sm">
                        Rating: {item.rating.rate} ({item.rating.count} reviews)
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center text-3xl font-bold text-[#1A0B5B] font-josefin">
          Latest Products
        </h2>

        {loading ? (
          <p className="text-center mt-6">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center mt-6">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
            {products.slice(0, 6).map((product, index) => (
              <div
                key={product.id || index}
                className="bg-white p-4 text-center relative"
              >
                <div className="bg-[#F6F7FB] h-48 flex items-center justify-center mb-4 rounded">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-32 max-w-[80%]"
                  />
                </div>

                <div className="flex justify-between items-start">
                  <p className="text-gray-800 font-semibold line-clamp-2">
                    {product.title}
                  </p>

                  <div className="flex gap-2 text-sm items-end">
                    <p className="text-gray-700 font-bold">${product.price}</p>
                    <p className="text-red-500 line-through text-xs">
                      ${Math.round(product.price * 1.3)}
                    </p>
                  </div>
                  <AddtoCart  product={product} />
                </div>
                {product.rating && (
                  <p className="text-gray-600 text-sm mt-2">
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* What Shopex Offer! */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-center text-3xl font-bold text-[#1A0B5B] font-josefin">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {[
            { icon: Image8, title: "24/7 Support" },
            { icon: Image9, title: "24/7 Support" },
            { icon: Image10, title: "24/7 Support" },
            { icon: Image11, title: "24/7 Support" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[270px] h-[320px] flex flex-col justify-center text-center shadow-lg p-4 text-center mx-auto hover:shadow-md transition-all"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto h-20 mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Part */}
      <div className="bg-[#F1F0FF]">
        <div className="flex container mx-auto px-20 py-10">
          <div>
            <img src={Image12} alt="" />
          </div>
          <div>
            <div className="mt-20">
              <p
                className="text-3xl font-bold text-[#1A0B5B] font-josefin"
                style={{ width: "507px" }}
              >
                Unique Features Of Latest & Trending Products
              </p>
            </div>

            <div>
              <tr>
                <td className="pr-8">
                  <p className="text-pink-500 font-bold text-5xl">.</p>
                </td>
                <td className="text-gray-500">
                  All frames constructed with hardwood solids and laminates
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-blue-800 font-bold text-5xl">.</p>
                </td>
                <td className="text-gray-500">
                  <p style={{ width: "461px" }}>
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-green-500 font-bold text-5xl">.</p>
                </td>
                <td className="text-gray-500">
                  Arms, backs and seats are structurally reinforced
                </td>
              </tr>
            </div>

            <div className="flex pt-4">
              <div>
                <button
                  className="bg-[#FB2E86] text-white rounded mt-4 font-lato"
                  style={{ width: "157px", height: "45px" }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-4 ml-4">
                <p>B&B Italian Sofa</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="pt-10">
        <h2 className="text-center text-3xl font-bold text-[#1A0B5B] font-josefin">
          Trending Products
        </h2>
        <div>
          <div className="grid grid-cols-4 gap-6 pt-16 mx-auto w-fit">
            <div
              className="bg-white border rounded-lg shadow-lg"
              style={{ width: "270px", height: "361px" }}
            >
              <div
                style={{
                  background: "#F6F7FB",
                  width: "100%",
                  height: "236px",
                }}
                className="flex items-center justify-center"
              >
                <img
                  src={Image13}
                  alt="Cantilever Chair"
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-center font-bold text-lg font-Lato">
                  Cantilever Chair
                </p>
                <div className="flex gap-2 text-sm justify-center">
                  <p className="text-gray-700 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through text-xs">$42.00</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white border rounded-lg shadow-lg"
              style={{ width: "270px", height: "361px" }}
            >
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  background: "#F6F7FB",
                  width: "100%",
                  height: "236px",
                }}
              >
                <img
                  src={Image14}
                  alt="Product 2"
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-center font-bold text-lg font-Lato">
                  Cantilever Chair
                </p>
                <div className="flex gap-2 text-sm justify-center">
                  <p className="text-gray-700 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through text-xs">$42.00</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white border rounded-lg shadow-lg"
              style={{ width: "270px", height: "361px" }}
            >
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  background: "#F6F7FB",
                  width: "100%",
                  height: "236px",
                }}
              >
                <img
                  src={Image15}
                  alt="Product 3"
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-center font-bold text-lg font-Lato">
                  Cantilever Chair
                </p>
                <div className="flex gap-2 text-sm justify-center">
                  <p className="text-gray-700 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through text-xs">$42.00</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white border rounded-lg shadow-lg"
              style={{ width: "270px", height: "361px" }}
            >
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  background: "#F6F7FB",
                  width: "100%",
                  height: "236px",
                }}
              >
                <img
                  src={Image16}
                  alt="Product 3"
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-center font-bold text-lg font-Lato">
                  Cantilever Chair
                </p>
                <div className="flex gap-2 text-sm justify-center">
                  <p className="text-gray-700 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through text-xs">$42.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-16 py-10 grid grid-cols-3 gap-10">
          <div className="p-4 bg-[#FFF6FB]">
            <p className="text-lg font-semibold mb-2">
              23% off in all products
            </p>
            <button className="text-pink-500 font-medium">Shop Now</button>
            <div className="flex items-end justify-end">
              <img src={Image17} alt="product" className="object-contain" />
            </div>
          </div>

          <div className="p-4 bg-[#EEEFFB]">
            <p className="text-lg font-semibold mb-2">
              23% off in all products
            </p>
            <button className="text-pink-500 font-medium">Shop Now</button>
            <div className="flex items-end justify-end">
              <img src={Image18} alt="product" className="object-contain" />
            </div>
          </div>

          <div className="grid grid-rows-3 gap-6">
            <div className="flex gap-2">
              <div
                className="bg-[#F5F6F8]"
                style={{ width: "107px", height: "74px" }}
              >
                <img src={Image19} alt="" />
              </div>
              <div className="items-center">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className="bg-[#F5F6F8]"
                style={{ width: "107px", height: "74px" }}
              >
                <img src={Image19} alt="" />
              </div>
              <div className="items-center">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div
                className="bg-[#F5F6F8]"
                style={{ width: "107px", height: "74px" }}
              >
                <img src={Image19} alt="" />
              </div>
              <div className="items-center">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Item */}
      <div className="container mx-auto px-4 py-10 px-20">
        <h2 className="text-center text-3xl font-bold text-[#1A0B5B] font-josefin">
          Discount Item
        </h2>
        <div className="flex gap-4 justify-center pt-6 list-none cursor-pointer">
          <li className="hover:text-pink-500">Wood Chair</li>
          <li className="hover:text-pink-500">Plastic Chair</li>
          <li className="hover:text-pink-500">Sofa Collection</li>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 py-10 items-center justify-center container mx-auto">
          <div className="max-w-lg">
            <h1 className="text-[#151875] font-bold font-josefin text-3xl mb-4">
              20% Discount On All Products
            </h1>
            <p className="text-pink-500 font-josefin text-lg mb-4">
              Eams Sofa Compact
            </p>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <ul className="list-none text-gray-500 grid grid-cols-2 gap-y-2">
              <li>Material expose like metals</li>
              <li>Clear lines and geometric figures</li>
              <li>Simple neutral colours</li>
              <li>Material expose like metals</li>
            </ul>

            <div>
              <button className="bg-pink-500 text-white py-2 px-4 mt-8">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-full max-w-md">
            <img src={Image20} className="object-contain w-full" />
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="container mx-auto px-4 py-5 pb-20">
        <h2 className="text-center text-3xl font-bold text-[#1A0B5B] font-josefin">
          Top Categories
        </h2>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center pt-10 mx-auto w-fit">
            {currentProducts.length === 0 && !loading ? (
              <p className="text-center w-full">No categories found</p>
            ) : (
              currentProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center rounded-lg p-6"
                >
                  <div className="w-[269px] h-[269px] bg-[#F5F6F8] rounded-full flex items-center justify-center hover:border-b-8 border-purple-500 hover:border-l-8 border-purple-500 transition duration-300">
                    <img src={item.image} className="w-40 h-40" />
                  </div>

                  <button
                    onClick={() => navigate("/shop")}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mt-4 rounded"
                  >
                    View Shop
                  </button>

                  <h2 className="mt-4 text-center text-gray-800 font-medium text-lg line-clamp-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-1">${item.price}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Pagination
              page={currentPage}
              onChange={setCurrentPage}
              total={totalPages}
              color="grape"
              size="sm"
              radius="xl"
            />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div
        className="flex justify-center items-center h-[462px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image21})` }}
      >
        <div className="text-center">
          <p className="w-[514px] text-josefin text-3xl font-bold mx-auto">
            Get Latest Update By Subscribing To Our Newsletter
          </p>
          <br />
          <button className="bg-pink-500 text-white py-2 px-4 mt-4">
            Shop Now
          </button>
        </div>
      </div>

      <Banner />

      {/* Latest Blog */}
      <div className="container mx-auto px-4 pt-20 pb-24">
        <h2 className="text-center text-3xl font-bold text-[#1A0B5B] font-josefin">
          Latest Blog
        </h2>

        <div className="grid grid-cols-3 gap-6 container mx-auto pt-10">
          {products.length === 0 && !loading ? (
            <p className="text-center w-full">No blog posts found</p>
          ) : (
            products.slice(0, 3).map((item, index) => (
              <div
                key={item.id || index}
                className="border rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-4 text-left">
                  <div className="flex items-center text-sm text-gray-500 mb-2 gap-8">
                    <span className="text-pink-500">📌 Yash</span>
                    <span className="text-yellow-600">📅 07/05/2004</span>
                  </div>

                  <h2 className="text-xl font-semibold text-[#1D3178] mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="text-indigo-600 hover:underline font-medium text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;