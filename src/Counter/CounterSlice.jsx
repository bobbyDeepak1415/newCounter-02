import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    value:0
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value >= 0) 
        state.value -= 1;
      
    },
  },
});

export const {counter,increment,decrement} =CounterSlice.actions

export default CounterSlice.reducer;

