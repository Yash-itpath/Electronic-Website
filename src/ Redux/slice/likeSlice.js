import { createSlice } from '@reduxjs/toolkit';

const getInitialLikes = () => {
  const storedLikes = localStorage.getItem("likedItems");
  return storedLikes ? JSON.parse(storedLikes) : [];
};

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    items: getInitialLikes(),
  },
  reducers: {
    addToLike: (state, action) => {
      const item = action.payload;
      if (!state.items.find((i) => i.id === item.id)) {
        state.items.push(item);
        localStorage.setItem("likedItems", JSON.stringify(state.items));
      }
    },
    removeFromLike: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("likedItems", JSON.stringify(state.items));
    },
  },
});

export const { addToLike, removeFromLike } = likeSlice.actions;
export default likeSlice.reducer;
