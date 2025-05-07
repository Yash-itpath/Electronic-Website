import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../ Redux/slice/cart.slice'; 

function AddtoCart({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      dispatch(addToCart(product));
      alert("Added to cart!");
    } else {
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-white p-1 rounded-full shadow hover:bg-gray-100"
    >
      🛒
    </button>
  );
}

export default AddtoCart;
