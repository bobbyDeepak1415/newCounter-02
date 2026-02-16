import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { counter, decrement, increment } from "./Counter/CounterSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>
        Your counter is at <span>{useSelector(counter.value)}</span>
      </h2>
      <button onClick={() => dispatch(increment())}>-</button>
      <button onClick={() => dispatch(decrement())}>+</button>
    </>
  );
}

export default App;
