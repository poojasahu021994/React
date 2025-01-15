import { Route,Routes } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contect from"./Contect.jsx"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path="/about/:name/:age" element={<About/>}/>
      <Route path="contect" element={<Contect/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
