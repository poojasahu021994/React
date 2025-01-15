import React, { useState } from 'react'
function Color() {
  const [col, setCol] = useState('yellow')

  // function red(){
  //   setCol('#FFC145');  
  // }
  // function blue(){
  //   setCol('blue');  
  // }
  // function black(){
  //   setCol('black');  
  // }
  // function green(){
  //   setCol('green');  
  // }
  
  

  return (
    <>
      <div style={{height:"50vh", width:"50vw", marginTop:'100px', borderRadius:'50px',backgroundColor:col}}>

      <button onClick={()=>setCol('red')}>red</button>
      <button onClick={()=>setCol('blue')}>blue</button>
      <button onClick={()=>setCol('black')}>black</button>
      <button onClick={()=>setCol('green')}>green</button>
      {/* <button onClick={blue}>Blue</button>
      <button onClick={black}>black</button>
      <button onClick={green}>green</button> */}
      </div>
    </>
  )

}
export default Color
