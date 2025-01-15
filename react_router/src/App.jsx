import Home from './Home'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Layout from './Layout'
function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} ></Route>
        <Route path="/about" element={<About/>}></Route>
        </Route>
      </Routes>
      {/* <About/>
    <Home/>
    <Layout/> */}
    </>
  )
}

export default App
