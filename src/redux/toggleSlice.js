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
    handleSidebar: (state, action) => {
      state.show = action.payload;
    },
  },
});

export default toggleSlice.reducer;
export const { toggleSidebar, handleSidebar } = toggleSlice.actions;
