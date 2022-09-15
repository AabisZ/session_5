// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";
function App() {
  let countState = useState(1);
  // let [count, setCount] = useState(25);
  return (
    // if we want to use the default value of the
    // context then we dont wrap the component

    // this is wrapping
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
