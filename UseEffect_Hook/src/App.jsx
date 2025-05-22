import { useState, useEffect } from 'react'
import './App.css'
import TimerComponent from './TimerComponent';

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal]= useState(1);

  // variation:1
  // runs on every render
  // useEffect (()=>{
  //   alert("I will run on each render")
  // })

  // variation:2
  // that runs on only first render
//   useEffect(()=>{
//     alert("I will run on only 1st render");
//   },[]
// )

// variation:3
// useEffect(()=>{
// alert("i will run every time when count is updated")
// }),[count]
  
// variation :4
// multiple dependencies
// useEffect(()=>{
// alert("i will run every time when count/total is updated")
// }, [count,total])

// variation:5
// lets add cleaup function
// useEffect(() => {
//   alert("count is update")
//   return () => {
//     alert("count is unmounted form ui")
//   }
// }, [count])

//   function handleClick(){
//     setCount(count+1);
    
//   }
//   function handleClicktotal(){
// setTotal(count+1);
//   }
  return (
    <>
    <TimerComponent/>
    {/* <button onClick={handleClick}>update click</button>
    update count value {count}
    <br></br>
    <button onClick={handleClicktotal}>update click</button>
     count total{total} */}
    </>
  )
}

export default App
