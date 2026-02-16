import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Counter/counterSlice2";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>
        Your counter is at{" "}
        <span>{useSelector((state) => state.counter.value)}</span>
      </h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default App;
