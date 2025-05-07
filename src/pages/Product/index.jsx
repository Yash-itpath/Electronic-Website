import React, { useContext } from "react";
import { PostContext } from "../../Context/PostContext";
import Banner from "../../component/banner";
import AddtoCart from "../../component/AddtoCart";
import Like from "../../component/Like";

function Product() {
  const { loading, products } = useContext(PostContext);

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded shadow">
                <div className="h-48 flex justify-center items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center my-2">
                  <span className="text-gray-700 font-semibold">
                    ${item.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    ${item.originalPrice || (item.price * 1.2).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-2 text-gray-600">(4.5)</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between mt-3">
                  {/* <button className="text-gray-500 hover:text-gray-700">🛒</button> */}
                  <AddtoCart product={item} />
                  {/* <button className="text-gray-500 hover:text-gray-700">❤️</button> */}
                  <Like product={item} />
                  <button className="text-gray-500 hover:text-gray-700">👁️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Banner />
    </>
  );
}

export default Product;
