import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToLike } from "../../ Redux/slice/likeSlice";

function Like({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLike = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      dispatch(addToLike(product));
      alert("Added Like!");
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
