import { createSlice } from '@reduxjs/toolkit';

// Initialize cart from localStorage if available, otherwise start with an empty array
const getInitialCart = () => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cartItems: getInitialCart(),
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); 
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },


    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },

    
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(i => i.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; 
        } else {
          
          state.cartItems = state.cartItems.filter(i => i.id !== itemId);
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
      }
    },

       updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(i => i.id === id);
      if (existingItem) {
        if (quantity <= 0) {
          
          state.cartItems = state.cartItems.filter(i => i.id !== id);
        } else {
          existingItem.quantity = quantity; 
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
      }
    },

    
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItems"); 
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, updateQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;