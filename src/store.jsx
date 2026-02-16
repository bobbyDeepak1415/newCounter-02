import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./Counter/counterSlice3";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
