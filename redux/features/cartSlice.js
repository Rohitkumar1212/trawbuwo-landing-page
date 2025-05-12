import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,  // Add totalQuantity to track the count
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
      state.totalQuantity += 1;  // Increment totalQuantity
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
        state.totalQuantity -= 1;  // Decrement totalQuantity
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;  // Reset totalQuantity
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
