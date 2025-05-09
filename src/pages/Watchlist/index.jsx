import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromLike } from "../../ Redux/slice/likeSlice";
import { addToCart } from "../../ Redux/slice/cart.slice";
import { useNavigate } from "react-router-dom";

function WatchList() {
  const dispatch = useDispatch();
  const LikeItems = useSelector((state) => state.like.items);
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromLike(item.id));
    alert("Removed from watchlist!");
  };

  const handleBuy = (item) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      dispatch(addToCart(item));
      alert("Added to cart!");
      navigate("/ncart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Your WatchList
      </h1>

      {LikeItems.length === 0 ? (
        <p className="text-center text-gray-500">No items in watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LikeItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4 flex flex-col ">
                <div className="flex-grow">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                    {item.description}
                  </p>
                  <p className="mt-2 text-base sm:text-lg font-bold text-gray-900">
                    ${item.price}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-red-500 text-white text-sm px-3 py-2 rounded-md hover:bg-red-600 transition"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-green-500 text-white text-sm px-3 py-2 rounded-md hover:bg-green-600 transition"
                    onClick={() => handleBuy(item)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;
