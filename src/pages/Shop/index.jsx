import React, { useContext } from 'react';

import { PostContext } from '../../Context/PostContext';

function Shop() {
   const { cartItems } = useContext(PostContext);
   console.log(cartItems);

  return (
    <div className="p-4">
  <h1 className="text-xl font-bold mb-4">Your Cart</h1>
  {cartItems.length === 0 ? (
    <p>No items in cart.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
      {cartItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                onClick={() => handleRemoveFromCart(item)}  // Add a remove function if needed
              >
                Remove
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={() => handleBuy(item)}  // Handle buying action
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

export default Shop;
