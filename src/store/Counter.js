import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decremeant: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decremeant } = CounterSlice.actions;

export default CounterSlice.reducer;
