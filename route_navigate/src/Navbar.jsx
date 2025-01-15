import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar(){
    return(
        <>
      
            <ul className="Navbar">
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/contact'>Contect</Link> </li>
            </ul>       
           <Outlet/>
        </>
    )

}export default Navbar