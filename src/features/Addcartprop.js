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
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
