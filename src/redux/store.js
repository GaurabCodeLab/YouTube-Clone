import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import cacheReducer from "./cacheSlice";

const store = configureStore({
  reducer: { toggleReducer, cacheReducer },
});

export default store;
