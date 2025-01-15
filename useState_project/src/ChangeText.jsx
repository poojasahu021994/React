import { useState } from "react";

function Text(){
let [show,setShow]=useState(false)

    
return(
    <>
       {(show) ? <h2>this is react class</h2> :""}
     <button onClick={()=>setShow(!show)}>
     {(show) ? "Hide" :"Dispaly"}
     </button>
     
    </>
)
}

export default Text