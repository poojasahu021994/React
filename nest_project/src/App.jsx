import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Layout from './Layout.jsx'
import Counter from './Counter.jsx'
import Show from './Show.jsx'


function App() {
  
 return (
    <>
    {/* <Show fname={"pooja"} fage={"26"}/> */}
      <Routes>
        <Route path='/' element ={<Layout/>}>
       <Route index element={<Counter/>} />
        <Route path="/show" element={<Show fname="pooja" fage="26"/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
