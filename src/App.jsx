import { useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount, multiplyBy2 } from "./Counter/counterSlice3";

function App() {

  const dispatch = useDispatch();
  return (
    <>
      <h2>Your counter is at:  </h2>
      <button onClick={()=>dispatch(decrement)}>-</button>
      <button onClick={()=>dispatch(increment)}>+</button>
      <button onClick={()=>dispatch(incrementByAmount)}>IncreaseByAmount</button>
      <button onClick={()=>dispatch(multiplyBy2)}>*2</button>
    </>
  );
}

export default App;
