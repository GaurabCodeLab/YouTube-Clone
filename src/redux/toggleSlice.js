import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    show: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.show = !state.show;
    },
  },
});

export default toggleSlice.reducer;
export const { toggleSidebar } = toggleSlice.actions;
