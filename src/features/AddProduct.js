import { createSlice } from "@reduxjs/toolkit";

const initialProducts = {
  products: [],
};

const productList = createSlice({
  name: "addProduct",
  initialState: initialProducts,
  reducers: {
    addProduct(state, action) {
      state.products = action.payload;
    },
    removeProduct(state, action) {
      state.products = action.payload;
    },
    editProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addProduct, removeProduct, editProduct } = productList.actions;

export default productList.reducer;