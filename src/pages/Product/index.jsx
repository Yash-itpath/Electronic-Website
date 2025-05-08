import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../ Redux/slice/productSlice";
// import { addToCart } from "../../ Redux/slice/cart.slice";
// import { addToLike } from "../../ Redux/slice/likeSlice";

import Banner from "../../component/banner";
import AddtoCart from "../../component/AddtoCart";
import Like from "../../component/Like";
import Modal from "../../component/Modal";

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // const handleAddToCart = (product) => {
  //   const token = localStorage.getItem("auth_token");
  //   if (token) {
  //     dispatch(addToCart(product));
  //     alert("Added to cart!");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  // const handleLike = (product) => {
  //   const token = localStorage.getItem("auth_token");
  //   if (token) {
  //     dispatch(addToLike(product));
  //     alert("Added Like!");
  //   } else {
  //     navigate("/login");
  //   }
  // };

  // Helper to render star rating
  const renderStars = (rate) => {
    const stars = Math.round(rate);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-10">No products found</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((items) => (
              <div key={items.id} className="bg-white p-4 rounded shadow">
                <div className="h-48 flex justify-center items-center mb-4">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold line-clamp-1">
                  {items.title}
                </h3>
                <div className="flex items-center my-2">
                  <span className="text-gray-700 font-semibold">
                    ${items.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${(items.price * 1.2).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  {items.rating ? (
                    <>
                      <span className="text-yellow-400">
                        {renderStars(item.rating.rate)}
                      </span>
                      <span className="ml-2 text-gray-600">
                        ({items.rating.rate.toFixed(1)}, {items.rating.count}{" "}
                        reviews)
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-600">No ratings</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between mt-3">
                  <AddtoCart product={items} />
                  <Like product={items} />
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => {
                      setSelectedProduct(items);
                      setIsModalOpen(true);
                    }}
                  >
                    👁️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Banner />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedProduct}
      />
    </>
  );
}

export default Product;
