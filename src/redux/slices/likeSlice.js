// redux/slices/likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedProducts: JSON.parse(localStorage.getItem('likedProducts')) || [],
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const productId = action.payload.id;
      const existingIndex = state.likedProducts.findIndex((product) => product.id === productId);

      if (existingIndex >= 0) {
        // Remove if already liked
        state.likedProducts = state.likedProducts.filter((product) => product.id !== productId);
      } else {
        // Add if not liked
        state.likedProducts.push(action.payload);
      }

      // LocalStorage ga saqlash
      localStorage.setItem('likedProducts', JSON.stringify(state.likedProducts));
    },
    clearLikes: (state) => {
      state.likedProducts = [];
      localStorage.removeItem('likedProducts');
    },
  },
});

export const { toggleLike, clearLikes } = likeSlice.actions;

export const selectLikedProducts = (state) => state.like.likedProducts;
export const selectIsLiked = (productId) => (state) =>
  state.like.likedProducts.some((product) => product.id === productId);

export default likeSlice.reducer;
