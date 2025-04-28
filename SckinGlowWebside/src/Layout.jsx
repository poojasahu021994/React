import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header=()=> {
let navigate=useNavigate();
  let ButContact=()=>{
    navigate("/contact")

  }
    return(
        <>
        
        <div className="Main_Navbar_div">
        <nav className="Main_navbar">
            <ul>
                <li>
                    <img src="GlowSkinStodioLogo.jpg"/>
                </li>
                <li>
                    <ul className='nav_componets'>
                    <li><Link id='link' to="/">Home</Link></li>
                    <li><Link id='link' to="/about">About</Link></li>
                    <li><Link id='link' to="/content">Treatments</Link></li>
                    <li><Link id='link' to="/addtocart">Product</Link></li>
                    <li><Link id='link' to="/location">Locations</Link></li>
                    <li><Link id='link' to="/contact" onClick={ButContact}>Contact Us</Link></li>
                    <li><Link id='link' to="/service">Offer</Link></li>
                    <li><Link id='link' to="/admin">admin</Link></li>


                    </ul>
                </li>
                <li>
                    <ul>
                        <li><Link id='link' to="/signup">SignUp</Link></li>
                        <li><Link id='link' to="/login"><i className="fa-solid fa-user"></i></Link></li>
                        <div>
          <label htmlFor="input1"><i className="fa-solid fa-bars"></i></label>
        </div>
                    </ul>
                </li>
            </ul>


          
        </nav>
        </div>  
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
        {/* mobile Navbar */}
        <div className="shownav">
      <ul>
      <li><Link id='link' to="/">Home</Link></li>
      <li><Link id='link' to="/about">About</Link></li>
      <li><Link id='link' to="/content">Treatments</Link></li>
      <li><Link id='link' to="/service">Blog</Link></li>
      <li><Link id='link' to="/location">Locations</Link></li>
      <li><Link id='link' to="/contact" onClick={ButContact}>Contact Us</Link></li>
      <li><Link id='link' to="/service">Offer</Link></li>
      </ul>
    


        </div>
        </>
        )
        }

const Footer=()=> {
     return(
  
    <>
    <div className='footer'>
    <div className="footer_hedding">
      <h1>Glow Skin Studio</h1>
    </div>
    <div className="main_div">
      <ul>
        <h3 id="hedding">QUICK LINK</h3>
        <hr />
        <li><Link id='link' to="">Home</Link></li>
        <li><Link id='link' to="">Glow Studio</Link></li>
        <li><Link id='link' to="">Share Feadback</Link></li>
        <li><Link id='link' to="">Media</Link></li>
      </ul>
      <ul>
        <h3 id="hedding">SERVICE</h3>
        <hr />
        <li><Link id='link' to="/content">Dismantle Service</Link></li>
        <li><Link id='link' to="/content">Re-Send</Link></li>
        <li><Link id='link' to="">Loose Flower</Link></li>
        <li><Link id='link' to="">Contact Us</Link></li>
      </ul>
      <ul>
        <h3 id="hedding">CORPORATE INFO</h3>
        <hr />
        <li><Link id='link' to="">Blog</Link></li>
        <li><Link id='link' to="">Share Feadback</Link></li>
        <li><Link id='link' to="">Glow Studio</Link></li>
        <li><Link id='link' to="">Media</Link></li>
      </ul>
      <ul>
        <h3 id="hedding">MY ACCOUNT</h3>
        <hr />
        <li><Link id='link' to="">My cart</Link></li>
        <li><Link id='link' to="">My Order</Link></li>
        <li><Link id='link' to="">Track Order</Link></li>
        <li><Link id='link' to="">Order Details</Link></li>
      </ul>
      <ul className="social_icon">
        <h3 id="hedding">SOCIAL ACCOUNT</h3>
        <hr />
        <ul>
          <li>
            <i className="fa-brands fa-facebook fa-2x"></i>
          </li>
          <li>
            <i className="fa-brands fa-x-twitter fa-2x"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram fa-2x"></i
            >
          </li>
          <li>
            <i className="fa-brands fa-square-youtube fa-2x"></i>
          </li>
        </ul>
      </ul>
    </div>
    </div>
              </>
              
          )
      }




export {Header,Footer}