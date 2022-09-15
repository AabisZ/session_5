import React,{useContext} from "react";
import counterContext from "./CounterContext";
const Child = () => {
    let counterValue = useContext(counterContext);
  return (
    <div>
      <h1>This is First Child For ContextAPI Prac</h1>
      <h2>Counter Value is: {counterValue[0]}</h2>
      <br />
      <button onClick={() => counterValue[1](++counterValue[0]) } >Increment Context</button>
    </div> 
  );
}
export default Child;