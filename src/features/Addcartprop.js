import { createSlice } from "@reduxjs/toolkit";

const initialAddcart = {
  value: {},
};

const cartSlice = createSlice({
  name: "addCart",
  initialState: initialAddcart,
  reducers: {
    addCart(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
