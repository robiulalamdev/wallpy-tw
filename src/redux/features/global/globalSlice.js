import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = globalSlice.actions;

export default globalSlice.reducer;
