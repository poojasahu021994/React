import { useState } from "react";
function Conter() {
    const [count, setCounter] = useState(0)
  
    function add(){
      setCounter(count+1);  
    }
    function dic(){
      
      if(count>=1){
        setCounter(count-1);
      }
    }
  
    return (
      <>
        <h1>{count}</h1>
  
        <button onClick={add}>Increment</button>
        <br />
        <button onClick={dic}>decriment</button> 
      </>
    )
  }
  
  export default Conter
  