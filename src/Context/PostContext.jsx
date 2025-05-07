import React, { createContext, useState, useEffect } from "react";
import api from "../api";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategories] = useState([]);
  const [LikeItems, setLikeItems] = useState([]);


 

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const addToLike = (product) => {
    setLikeItems((prev) => [...prev, product]);
  };

  const fetchProducts = async () => {
    try {
      const data = await api.get("/products");
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

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await api.get("/products/category");
      if (response && response.categories) {
        setCategories(response.categories);
      } else {
        console.error("Categories not found:", response);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <PostContext.Provider
      value={{
        products,
        loading,
        cartItems,
        addToCart,
        category,
        LikeItems,
        addToLike,
         
      }}
    >
      {children}
    </PostContext.Provider>
  );
};


export default PostContextProvider;
