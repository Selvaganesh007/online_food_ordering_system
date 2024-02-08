import { createSlice } from "@reduxjs/toolkit";
import { userDetails } from "../MockData/userLoginData";

const initialHomeSlice = {
  signInUsers: [...userDetails],
  radioOption: "",
  addCart: [],
};

const HomeSlice = createSlice({
  name: "homeSlice",
  initialState: initialHomeSlice,
  reducers: {
    signInUserAction(state, action) {
      console.log({ state });
      state.signInUsers = [state, action.payload];
    },
    radioOptionAction(state, action) {
      state.radioOption = action.payload;
    },
    addCartAction(state, action) {
      state.addCart = action.payload;
    },
    removeCartAction(state, action) {
      state.addCart = action.payload;
    },
  },
});

export const {
  addCartAction,
  removeCartAction,
  signInUserAction,
  loginUserAction,
  radioOptionAction,
  finalCartAction,
} = HomeSlice.actions;

export default HomeSlice.reducer;
