import { createSlice } from "@reduxjs/toolkit";

const initialAddcart = {
  value: [],
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "addCart",
  initialState: initialAddcart,
  reducers: {
    addCart(state, action) {
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.value[itemIndex].cartTotalQuantity += 1;
      } else {
        const tempcart = { ...action.payload, cartTotalQuantity: 1 };
        state.value.push(tempcart);
      }
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
