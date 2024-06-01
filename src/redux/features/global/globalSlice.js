import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPath: "/dashboard",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const { setPath } = globalSlice.actions;

export default globalSlice.reducer;
