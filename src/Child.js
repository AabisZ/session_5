import React,{useContext} from "react";
import counterContext from "./CounterContext";
const Child = () => {
    let counterValue = useContext(counterContext);
  return (
    <div>
      <h1>This is First Child </h1>
      <h2>Counter Value is: {counterValue[0]}</h2>
      <br />
      <button onClick={() => counterValue[1](++counterValue[0]) } >Increment Counter</button>
    </div> 
  );
}
export default Child;