import React, { useContext } from "react";
import { PostContext } from "../../Context/PostContext";
import { useNavigate } from "react-router-dom";

function Like({ product }) {
  const { loading, products, addToCart, category, addToLike } =
    useContext(PostContext);
  const navigate = useNavigate();

  const handleLike = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      alert("Added Like!");
      addToLike(product);
    } else {
      navigate("/login");
    }
  };
  return (
    <button
      onClick={handleLike}
      className="bg-white p-1 rounded-full shadow hover:bg-gray-100"
    >
      💖
    </button>
  );
}

export default Like;
