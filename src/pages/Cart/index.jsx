import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../ Redux/slice/cart.slice'; 
import { useNavigate } from 'react-router-dom'; 

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleBuy = (item) => {
    if (window.confirm(`Confirm purchase of ${item.title} for $${item.price}?`)) {
      alert(`Successfully purchased ${item.title} for $${item.price}!`);
      dispatch(removeFromCart(item.id)); 
      navigate('/order'); 
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">No items in cart.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">${item.price}</p>
                <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full sm:w-auto"
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

export default Cart;
