import { Route, Routes, useLocation } from "react-router-dom"
import {Header ,Footer} from "./Layout"
import Home from "./Home"
import About from "./About"
import Signup from "./Signup"
import Login from "./Login"
import React from "react"


function App() {
  
let local = useLocation()

let auht = local.pathname == '/signup' || local.pathname == '/login'
  return (
    <>
    {!auht && <Header />}
      
        <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      
      {!auht && <Footer />}
    </>
  )
}

export default App
