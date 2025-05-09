import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../ Redux/slice/cart.slice';
import { useNavigate } from 'react-router-dom';

function Ncart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    if (window.confirm(`Remove ${item.title} from cart?`)) {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleBuy = (item) => {
    if (window.confirm(`Confirm purchase of ${item.title} for $${item.price}?`)) {
      alert(`Successfully purchased ${item.title} for $${item.price}!`);
      dispatch(removeFromCart(item.id));
      navigate('/order');
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the entire cart?')) {
      dispatch(clearCart());
    }
  };

  const handleBuyAll = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      navigate('/order');
      return;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    if (window.confirm(`Confirm purchase of all ${cartItems.length} items for $${total}?`)) {
      alert(`Successfully purchased all items for $${total}!`);
      dispatch(clearCart());
      navigate('/order');
    }
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center underline">🛒 Your Cart</h1>

      {totalItems > 0 && (
        <div className="mb-6 px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-base sm:text-lg font-medium text-gray-800">Total Items: {totalItems}</p>
            <p className="text-base sm:text-lg font-semibold text-gray-900">Total Price: ${totalPrice}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              onClick={handleBuyAll}
            >
              Buy All
            </button>
            <button
              type="button"
              className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                <p className="text-lg font-bold text-gray-900 mb-4">${item.price}</p>
                <div className="flex flex-col sm:flex-row justify-between gap-2 mt-auto">
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
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

export default Ncart;
