import { createSlice } from "@reduxjs/toolkit";

const initialuserDetails = {
  userDetails: [],
};

const signInUser = createSlice({
  name: "signinUser",
  initialState: initialuserDetails,
  reducers: {
    signInUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const { signInUserDetails } = signInUser.actions;
export default signInUser.reducer;
