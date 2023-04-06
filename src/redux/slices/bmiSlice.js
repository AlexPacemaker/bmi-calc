import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: "",
  height: "",
  output: "",
  bmi: "",
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    setWeight(state, action) {
      state.weight = action.payload;
    },
    setHeight(state, action) {
      state.height = action.payload;
    },
    setOutput(state, action) {
      state.output = action.payload;
    },
    setBmi(state, action) {
      state.bmi = action.payload;
    },
  },
});

export const bmiData = (state) => state.bmiSlice;

export const {
  weight,
  height,
  output,
  bmi,
  setWeight,
  setHeight,
  setOutput,
  setBmi,
} = bmiSlice.actions;

export default bmiSlice.reducer;
