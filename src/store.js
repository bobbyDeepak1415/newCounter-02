import { configureStore } from "@reduxjs/toolkit";

import CounterReducer2 from "./Counter/counterSlice2";

export const store = configureStore({
  reducer: {
    counter: CounterReducer2,
  },
});
