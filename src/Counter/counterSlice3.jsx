import { createSlice } from "@reduxjs/toolkit";

const state = {
  value: 0,
};

const counterSlice3 = createSlice({
  name: "counter",
  state,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 0) return;
      state.value -= 1;
    },
    incrementByAmount: (state,action) => {
      state.value+=action.payload;
    },
    multiplyBy2: () => {},
  },
})

export const { increment, decrement, incrementByAmount, multiplyBy2 } =
  counterSlice3.actions;

export default counterSlice3.reducer;
