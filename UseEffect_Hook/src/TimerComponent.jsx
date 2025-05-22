import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds]= useState(0);
    useEffect(()=>{
        const intervalId= setInterval(()=>{
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000);
        return()=>{
            clearInterval(intervalId)
        }
    },[]);
    // it will run only on first render
  return (

    <>
    <h1>Seconds: {seconds}</h1>
    </>
  )
}
export default TimerComponent
