// Эта функция создает Redux-хранилище с помощью redux-toolkit и настраивает его для использования с reducers. В данном случае, она создает хранилище с единственным reducer'om - bmiSlice. Это означает, что действия, отправленные в хранилище, будут обрабатываться только этим reducer'ом.

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import bmiSlice from "./slices/bmiSlice";

export const store = configureStore({
  reducer: {
    bmiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
