import {Routes,Route, useLocation} from 'react-router-dom'
import { Footer, Header } from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Form from './Form'
import Login from './Login'
import './App.css'
import Update from './Update'
import GoToTop from './GoToTop'
import Location from './Location'
import Admin from './Admin'
import Addtocart from './Addtocart'

function App() {
  let local = useLocation()
  let auth= local.pathname =='/signup' || local.pathname == '/login'

  
  return (
    <>
    {!auth && <Header />}
    <Routes>  
        <Route index element={<Home/>} ></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<Form/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
        <Route path="/gototop" element={<GoToTop/>}></Route>
        <Route path="/location" element={<Location/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>  
        <Route path="/addtocart" element={<Addtocart/>}></Route>        

      </Routes>
      <GoToTop/>
      {!auth && <Footer />}
      
    </>
  )
}

export default App
