import { createSlice } from "@reduxjs/toolkit";

const initialradio = "";

const Radioslice = createSlice({
  name: "radio",
  initialState: {
    value: initialradio,
  },
  reducers: {
    OptionValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default Radioslice.reducer;

export const { OptionValue } = Radioslice.actions;
