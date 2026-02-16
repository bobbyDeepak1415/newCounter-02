import "./App.css";
import { counter, decrement, increment } from "./Counter/CounterSlice";

function App() {
  return <>
  <h2>Your counter is at <span>{counter}</span></h2>
  <button onClick={increment}>-</button>
  <button onClick={decrement}>+</button>

  </>;
}

export default App;
