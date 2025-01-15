import { useState } from "react";
function Counter() {
    const [count, setCounter] = useState(0)
  
    function add(){
      setCounter(count+5);  
    }
    function dec(){
      
      if(count>=1){
        setCounter(count-1);
      }
    }
  
    return (
      <>
        <h1>{count}</h1>
  
        <button onClick={add}>Increment</button>
        <br />
        <button onClick={dec}>decriment</button> 
      </>
    )
  }
  
  export default Counter
  