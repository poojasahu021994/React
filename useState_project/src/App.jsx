import { useState } from 'react'
import './App.css'
import Color from './ColorChange.jsx'
import Pera from './PragrafShow.jsx'
import Text from './ChangeText.jsx'
import Conter from './Conter.jsx'
import Theam from './Theam.jsx'

function App() {
  const [count, setCounter] = useState(0)

  function add(){
    setCounter(count+1);  
  }
  function sub(){
    
    if(count>=1){
      setCounter(count-1);
    }
  }

  return (
    <>
    <Theam/>
    <Conter/>
    <Text />
    <Color/>
    <Pera/>
      <h1>{count}</h1>

      <button onClick={add}>Increment</button>
      <br />
       {/* <h1>{count}</h1> */}
      <button onClick={sub}>decriment</button> 
    </>
  )
}

export default App
