import React, { useState } from 'react'
function Theam() {
  const [col, setCol] = useState('white')
  

  return (
    <>
      <body style={{height:"100vh", width:"100vw",backgroundColor:col}}>

      <button onClick={()=>setCol('black')}>dark</button>
      <button onClick={()=>setCol('white')}>Ligth</button>
      </body>
    </>
  )

}
export default Theam
