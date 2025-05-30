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

import AddtoCart from "../../component/AddtoCart";
import Like from "../../component/Like";
import Banner from "../../component/banner";

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
      <div className="bg-[#F2F0FF] py-8 md:py-12 relative">
  <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 px-4">
    {/* Left Section: Lamp Image */}
    <div className="flex justify-center relative w-full md:w-1/3 -mt-8 md:-mt-12">
  <img
    src={Image} // Replace with actual lamp image URL
    alt="Decorative Hanging Lamp"
    className="w-3/4 md:w-full max-w-[200px] sm:max-w-[225px] md:max-w-[250px] object-contain"
  />
</div>

    {/* Middle Section: Text and Button */}
    <div className="text-center md:text-left py-4 md:py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
        New Furniture Collection
      </h1>
      <h2 className="text-lg md:text-2xl font-medium text-gray-600 mt-1">
        Trends in 2025
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-md">
        Discover the latest styles in furniture design, perfect for modern homes. Limited time offer!
      </p>
      <button
        className="bg-pink-500 text-white px-6 py-2 mt-4 md:mt-6 rounded-lg hover:bg-pink-600 transition text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-300"
        aria-label="Shop the new furniture collection"
      >
        Shop Now
      </button>
    </div>

    {/* Right Section: Sofa Image with Discount Badge */}
    <div className="flex justify-center relative">
      <img
        src={Image3} // Replace with actual sofa image source
        alt="Pink Tufted Sofa with Gold Legs"
        className="w-3/4 md:w-auto max-w-[300px] py-4 md:py-6"
      />

    </div>
  </div>
</div>

      <div className="mt-8 sm:mt-10" style={{ color: "#1A0B5B" }}>
        <div className="flex justify-center">
          <p className="font-josefin text-2xl sm:text-3xl font-bold text-center px-4">
            Featured Products
          </p>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
          <button
            onClick={scrollLeft}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 sm:p-3 rounded-full hover:bg-gray-100 focus:outline-none"
          >
            ◀
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 sm:p-3 rounded-full hover:bg-gray-100 focus:outline-none"
          >
            ▶
          </button>

          <div
            ref={containerRef}
            className="flex flex-nowrap overflow-x-auto no-scrollbar gap-4 sm:gap-6 px-4 py-4 sm:py-6 scroll-smooth"
          >
            {products.length === 0 && !loading ? (
              <p className="text-center w-full text-sm sm:text-base">
                No products found
              </p>
            ) : (
              products.map((item, index) => (
                <div
                  key={item.id || index}
                  className="bg-white border rounded-xl shadow-md flex-shrink-0 w-[200px] sm:w-[250px] duration-300 hover:shadow-xl relative group"
                >
                  <div className="h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain max-h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-start justify-end p-2 space-x-2 transition-all md:group-hover:opacity-100">
                      <Like product={item} />
                      <button className="bg-white p-1 sm:p-1.5 rounded-full shadow hover:bg-gray-100">
                        🔍
                      </button>
                      <AddtoCart product={item} />
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 text-center space-y-1">
                    <p className="font-semibold text-blue-900 text-sm sm:text-base line-clamp-1">
                      {item.title}
                    </p>
                    <div className="flex justify-center space-x-1">
                      <span className="h-1 w-3 sm:w-4 bg-teal-400" />
                      <span className="h-1 w-3 sm:w-4 bg-pink-500" />
                      <span className="h-1 w-3 sm:w-4 bg-blue-900" />
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Code - {item.id}
                    </p>
                    <p className="text-gray-800 font-bold text-sm sm:text-base">
                      ${item.price}
                    </p>
                    {item.rating && (
                      <p className="text-gray-600 text-xs sm:text-sm">
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
                  <AddtoCart product={product} />
                </div>
                {product.rating && (
                  <p className="text-gray-600 text-sm mt-2">
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
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
      <div className="bg-[#F1F0FF] py-10 px-4 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={Image12}
              alt="Product showcase"
              className="w-full max-w-md"
            />
          </div>

          <div className="flex-1">
            <p className="text-2xl md:text-3xl font-bold text-[#1A0B5B] font-josefin max-w-xl">
              Unique Features Of Latest & Trending Products
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-3xl font-bold">•</span>
                <p className="text-gray-500">
                  All frames constructed with hardwood solids and laminates
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-800 text-3xl font-bold">•</span>
                <p className="text-gray-500 max-w-md">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-3xl font-bold">•</span>
                <p className="text-gray-500">
                  Arms, backs and seats are structurally reinforced
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <button className="bg-[#FB2E86] text-white rounded font-lato px-6 py-2 hover:bg-pink-600 transition">
                Add to Cart
              </button>
              <div>
                <p className="font-semibold">B&B Italian Sofa</p>
                <p className="text-[#FB2E86] font-bold">$32.00</p>
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 justify-center px-4">
          {[Image13, Image14, Image15, Image16].map((img, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg shadow-lg w-[270px] h-[361px] mx-auto"
            >
              <div className="bg-[#F6F7FB] w-full h-[236px] flex items-center justify-center">
                <img
                  src={img}
                  alt={`Product ${i + 1}`}
                  className="object-contain max-h-full"
                />
              </div>
              <div className="mt-3 flex flex-col gap-3">
                <p className="text-center font-bold text-lg font-lato">
                  Cantilever Chair
                </p>
                <div className="flex gap-2 text-sm justify-center">
                  <p className="text-gray-700 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through text-xs">$42.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotional Banners & Recommendations */}
        <div className="container mx-auto px-4 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Promo Boxes */}
          {[Image17, Image18].map((img, i) => (
            <div
              key={i}
              className={`p-4 ${i === 0 ? "bg-[#FFF6FB]" : "bg-[#EEEFFB]"}`}
            >
              <p className="text-lg font-semibold mb-2">
                23% off in all products
              </p>
              <button className="text-pink-500 font-medium">Shop Now</button>
              <div className="flex items-end justify-end">
                <img
                  src={img}
                  alt="product"
                  className="object-contain max-h-[120px]"
                />
              </div>
            </div>
          ))}

          {/* Recommended Products List */}
          <div className="grid grid-rows-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="bg-[#F5F6F8] w-[107px] h-[74px] flex items-center justify-center">
                  <img
                    src={Image19}
                    alt="Mini product"
                    className="object-contain h-full"
                  />
                </div>
                <div>
                  <p className="font-medium">Executive Seat chair</p>
                  <p className="text-sm text-gray-700">$32.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discount Item */}
      <div className="container mx-auto px-4 py-10 md:px-10 lg:px-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1A0B5B] font-josefin">
          Discount Item
        </h2>

        {/* Tabs */}
        <ul className="flex flex-wrap gap-4 justify-center pt-6 list-none cursor-pointer text-sm sm:text-base">
          <li className="hover:text-pink-500">Wood Chair</li>
          <li className="hover:text-pink-500">Plastic Chair</li>
          <li className="hover:text-pink-500">Sofa Collection</li>
        </ul>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 py-10 items-center justify-center">
          {/* Text Content */}
          <div className="w-full max-w-xl px-4 sm:px-0">
            <h1 className="text-[#151875] font-bold font-josefin text-2xl sm:text-3xl mb-4">
              20% Discount On All Products
            </h1>
            <p className="text-pink-500 font-josefin text-lg mb-4">
              Eams Sofa Compact
            </p>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <ul className="list-none text-gray-500 grid grid-cols-1 sm:grid-cols-2 gap-y-2">
              <li>Material expose like metals</li>
              <li>Clear lines and geometric figures</li>
              <li>Simple neutral colours</li>
              <li>Material expose like metals</li>
            </ul>

            <button className="bg-pink-500 text-white py-2 px-6 mt-8 hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="w-full max-w-md px-4 sm:px-0">
            <img
              src={Image20}
              alt="Eams Sofa Compact"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="container mx-auto px-4 py-5 pb-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1A0B5B] font-josefin">
          Top Categories
        </h2>

        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.length === 0 && !loading ? (
              <p className="text-center col-span-full">No categories found</p>
            ) : (
              currentProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                  {/* Image Circle */}
                  <div className="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] bg-[#F5F6F8] rounded-full flex items-center justify-center hover:border-b-8 hover:border-l-8 border-purple-500 transition duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => navigate("/shop")}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 mt-5 rounded-full transition"
                  >
                    View Shop
                  </button>

                  {/* Title & Price */}
                  <h2 className="mt-4 text-center text-gray-800 font-medium text-base sm:text-lg line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">
                    ${item.price}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
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
        className="flex justify-center items-center h-[300px] sm:h-[400px] md:h-[462px] bg-cover bg-center px-4"
        style={{ backgroundImage: `url(${Image21})` }}
      >
        <div className="text-center max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-josefin text-white">
            Get Latest Update By Subscribing To Our Newsletter
          </p>

          <button className="bg-pink-500 text-white py-2 px-6 mt-6 rounded hover:bg-pink-600 transition">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {products.length === 0 && !loading ? (
            <p className="text-center w-full">No blog posts found</p>
          ) : (
            products.slice(0, 3).map((item, index) => (
              <div
                key={item.id || index}
                className="border rounded-lg overflow-hidden shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-4 text-left">
                  <div className="flex items-center text-sm text-gray-500 mb-2 gap-6 flex-wrap">
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
