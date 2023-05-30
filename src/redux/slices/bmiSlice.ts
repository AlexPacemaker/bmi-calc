// Этот код создает Redux slice с названием "bmi" и начальным состоянием, которое содержит 4 свойства - вес, рост, результат и индекс массы тела. Затем он экспортирует несколько actions, которые могут быть использованы для изменения состояния slice. В конце он экспортирует сам slice и его селектор. Slice объединяет reducers, actions и state  вместе в один объект, который может быть передан в Redux store.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IBmiState {
  weight: number | string;
  height: number | string;
  output: string;
  bmi: string;
}

const initialState: IBmiState = {
  weight: "",
  height: "",
  output: "",
  bmi: "",
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    setWeight(state, action: PayloadAction<number>) {
      state.weight = action.payload;
    },
    setHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
    setOutput(state, action: PayloadAction<string>) {
      state.output = action.payload;
    },
    setBmi(state, action) {
      state.bmi = action.payload;
    },
  },
});

export const bmiData = (state: RootState) => state.bmiSlice;

export const { setWeight, setHeight, setOutput, setBmi } = bmiSlice.actions;

export default bmiSlice.reducer;
