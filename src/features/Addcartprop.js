import { createSlice } from "@reduxjs/toolkit";

const initialAddcart = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "addCart",
  initialState: initialAddcart,
  reducers: {
    addCart(state, action) {
      state.cartItems = action.payload;
    },
    removeCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
