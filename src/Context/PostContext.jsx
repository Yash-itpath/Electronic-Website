import React, { createContext, useState, useEffect } from "react";
import api from "../api";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.get("/products");
        console.log("API Response:", data);

        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PostContext.Provider value={{ products, loading, cartItems, addToCart }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
