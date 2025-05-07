import React, { useContext } from 'react';
import { PostContext } from '../../Context/PostContext';
import { useNavigate } from 'react-router-dom';

function AddtoCart({ product }) {
  const { addToCart } = useContext(PostContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      addToCart(product);
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
