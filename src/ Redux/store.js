// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../ Redux/slice/cart.slice';
import productReducer from '../ Redux/slice/productSlice';
import likeReducer from '../ Redux/slice/likeSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    like: likeReducer,
  },
});

export default store;
