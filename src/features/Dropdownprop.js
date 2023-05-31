import { createSlice } from "@reduxjs/toolkit";

const initialdropdown = "";

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState: {
    value: initialdropdown,
  },
  reducers: {
    OptionValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default dropDownSlice.reducer;

export const { OptionValue } = dropDownSlice.actions;
