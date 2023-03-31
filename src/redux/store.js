import { configureStore } from "@reduxjs/toolkit";
import bmiSlice from "./slices/bmiSlice";

export const store = configureStore({
  reducer: {
    bmiSlice,
  },
});
