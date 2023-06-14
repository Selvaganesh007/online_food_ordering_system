import { createSlice } from "@reduxjs/toolkit";

const initaldetails = {
  userDetails: [],
};

const LoginUser = createSlice({
  name: "loginUser",
  initialState: initaldetails,
  reducers: {
    LoginUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const { LoginUserDetails } = LoginUser.actions;

export default LoginUser.reducer;
