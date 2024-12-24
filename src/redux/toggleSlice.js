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
    closeSideBar: (state, action) => {
      state.show = false;
    },
  },
});

export default toggleSlice.reducer;
export const { toggleSidebar, closeSideBar } = toggleSlice.actions;
