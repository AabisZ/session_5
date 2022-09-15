import React ,{useReducer}from "react";
import counterreducer from "./CounterReducer";
const Child2 = () => {
    let [state, dispatch] = useReducer(counterreducer,10);
    
  return (
    <div>
      <h1>This is Second Child For Reducer Prac</h1>
      <h2>Counter Value is: {state}</h2>
      <br/>
      <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
    </div>
  );
}
export default Child2;
