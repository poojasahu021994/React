import { useDispatch, useSelector } from "react-redux"
import { dec, inc } from "./CreateSlice"
import './App.css'

function App() {
let selectvalue=useSelector((s)=>s.counter.value)
let dis=useDispatch()
  return (
    <>
      <h1>{selectvalue}</h1>

      <button onClick={()=>dis(inc())}>Inc</button>
      <button onClick={()=>dis(dec())}>dec</button>
    </>
  )
}

export default App
