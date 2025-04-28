import {Routes,Route} from 'react-router-dom'
import './app.css'
import Nav from './Navbar'
import ImgRotator from './Hero'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


export function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Page1/>}>
        <Route path='/page2' element={<Page2/>}></Route>
        <Route path='/page3' element={<Page3/>}></Route>
        </Route>
      </Routes>
    </>
  )
}
