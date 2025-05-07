import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    items: [],
  },
  reducers: {
    addToLike: (state, action) => {
      const item = action.payload;
      if (!state.items.find((i) => i.id === item.id)) {
        state.items.push(item);
      }
    },
    removeFromLike: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToLike, removeFromLike } = likeSlice.actions;
export default likeSlice.reducer;