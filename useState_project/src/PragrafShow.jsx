import { useState } from "react";

function Pera(){
let [h,setH]=useState(false)
let p=''
// function show(){
    if(h){
        p=<h1>This is react class</h1>
    }
    else{
        p=''
    }
// }
return(
    <>
    {/* <button onClick={()=>setH(true)}>Show</button>
    <button onClick={()=>setH(false)}>Hide</button> */}
     <button onClick={()=>setH(!h)}>Show</button>
    {p}
    </>
)
}
export default Pera