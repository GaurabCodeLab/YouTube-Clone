import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    searchResults: null,
  },
  reducers: {
    addCache: (state, action) => {
      state.searchResults = { ...state.searchResults, ...action.payload };
    },
  },
});

export default cacheSlice.reducer;
export const { addCache } = cacheSlice.actions;
