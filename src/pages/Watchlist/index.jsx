import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromLike } from '../../ Redux/slice/likeSlice';
import { addToCart } from '../../ Redux/slice/cart.slice';
import { useNavigate } from 'react-router-dom';

function WatchList() {
  const dispatch = useDispatch();
  const LikeItems = useSelector((state) => state.like.items);
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromLike(item.id));
    alert('Removed from watchlist!');
  };

  const handleBuy = (item) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      dispatch(addToCart(item));
      alert('Added to cart!');
      navigate('/ncart');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Your WatchList</h1>

      {LikeItems.length === 0 ? (
        <p>No items in watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
          {LikeItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">${item.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
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