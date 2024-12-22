import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";

const store = configureStore({
  reducer: { toggleReducer },
});

export default store;
