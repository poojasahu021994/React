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
                   {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiGnRbbKK1iI0Ta2MeAHDcp4jzY9ftGZfgA&s"> --> */}
                    <img src="GlowSkinStodioLogo.jpg"/>
                </li>
                <li>
                    <ul className='nav_componets'>
                    <li><Link id='link' to="/">Home</Link></li>
                    <li><Link id='link' to="/about">About</Link></li>
                    <li><Link id='link' to="/content">Treatments</Link></li>
                    <li><Link id='link' to="/service">Blog</Link></li>
                    <li><Link id='link' to="/content">Locations</Link></li>
                    <li><Link id='link' to="/contact" onClick={ButContact}>Contact Us</Link>
                    
                    {/* <select className='contact-option'>
                    <option><button onClick={ButContact}>Appointment</button></option>
                    <option><button onClick={ButContact}>Appointment</button></option>
                    <option><button onClick={ButContact}>Appointment</button></option>
                     <option><button onClick={ButContact}>Appointment</button></option>
                     </select> */}

                    {/* <select className='contact-option'>
                    <option><Link id='link' to="/contact">Contact Us</Link></option>
                    <option><button onClick={ButContact}>Appointment</button></option>
                    <option><Link id='link' to="/contact">Contact-Number</Link></option>
                     <option><Link id='link' to="/contact">Whatsapp Chat</Link></option>
                     </select> */}
                    </li>
                    <li><Link id='link' to="/service">Offer</Link></li>

                    </ul>
                </li>
                <li>
                    <ul>
                        <li><Link id='link' to="/signup">SignUp</Link></li>
                        <li><Link id='link' to="/login"><i className="fa-solid fa-user"></i></Link></li>
                    </ul>
                </li>
            </ul>
        </nav>

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