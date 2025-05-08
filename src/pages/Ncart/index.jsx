// import React from 'react'
// import Cart from '../Cart';

// function Ncart() {
//   return (
//     <>
       
//        <Cart />
//     </>
//   )
// }

// export default Ncart
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../ Redux/slice/cart.slice';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    if (window.confirm(`Remove ${item.title} from cart?`)) {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleBuy = (item) => {
    alert(`Buying ${item.title} for $${item.price}`);
    // Replace with payment logic or redirect
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the entire cart?')) {
      dispatch(clearCart());
    }
  };

  const handleBuyAll = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    if (window.confirm(`Confirm purchase of all ${cartItems.length} items for $${total}?`)) {
      alert(`Successfully purchased all items for $${total}!`);
      dispatch(clearCart()); // Optional: clear cart after buying
    }
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-4">
<h1 className="text-3xl font-bold mb-4 text-center underline">🛒 Your Cart</h1>


      {totalItems > 0 && (
        <div className="mb-6 px-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-lg font-medium text-gray-800">Total Items: {totalItems}</p>
            <p className="text-lg font-semibold text-gray-900">Total Price: ${totalPrice}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              onClick={handleBuyAll}
            >
              Buy All
            </button>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}

      {totalItems === 0 ? (
        <p className="text-gray-600 text-center">No items in cart. Start shopping!</p>
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
                <p className="text-gray-600 line-clamp-2">{item.description}</p>
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

export default Cart;
