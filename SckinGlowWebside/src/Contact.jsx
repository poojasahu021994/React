import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Contact = () => {


  let [frminp, setFrminp] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""

  })
  let nav = useNavigate()

  const insertinp = (e) => {
    let { name, value } = e.target;
    setFrminp({ ...frminp, [name]: value })
  }

  const submitform = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/PesentData', frminp)
      .then(r => alert("inserted"))
      nav('/update')
  }



  return (
    <>
  
    {/* <section className='section-img'><div className="div-details">Experience the Difference</div> */}
    <section className='section-img'></section>
    <section className='update-section'>
    
    <article className='detail-article'>
    <h2 className='h3-detail'>We’d love to hear from you</h2> 
    <div className='detail-div'>
<div>Phone</div>
<div><Link>7400457156</Link></div>
<br></br>
<div>Email</div>
<div><Link>query@skinlab.in</Link></div>
<br></br>
<div>WhatsApp(Click Number)</div>
<div><Link>7400457156</Link></div>
</div> 
    </article>
    <article>
    <h3>Book an Appointment</h3>
      <div className="appointment-form-container">
        <form onSubmit={submitform} className="appointment-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" value={frminp.name} id="name" name="name" placeholder="Enter your full name" onChange={insertinp} required />
          <br></br>
          <label htmlFor="email">Email Address</label>
          <input type="email" value={frminp.email} id="email" name="email" placeholder="Enter your email" onChange={insertinp} required />
          <br></br>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" value={frminp.phone} id="phone" name="phone" placeholder="Enter your phone number" onChange={insertinp} required />
          <br></br>
          <label htmlFor="date">Preferred Date</label>
          <input type="date" value={frminp.date} id="date" name="date" onChange={insertinp} required />
          <br></br>
          <label htmlFor="time">Preferred Time</label>
          <input type="time" value={frminp.time} id="time" name="time" onChange={insertinp} required />
          <br></br>
          <label htmlFor="message">Additional Notes</label>
          <textarea value={frminp.message} id="message" name="message" rows="4" placeholder="Enter any additional details" onChange={insertinp}></textarea>
          <br></br>
          <button className='summit-button' type="submit">Submit</button>
        </form>
      </div>
      </article>
      </section>
      <section className='dr-vedio-section'>
        <article>
        <div className="iframe-div"><iframe width="560" height="315" src="https://www.youtube.com/embed/2v-sgzsy8sw?si=-q21vd6wM6CaULRx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </article>
        <article><h2 className='dr-hedding'>Beauty Secrets with Dr. Jamuna Rai</h2>
        <p className='dr-pera'>Dr. Jamuna Pai, India’s leading Cosmetic Physician and Celebrity Skin Expert for the past 3 decades, shares her Beauty Secrets on how to get and maintain the best skin of your life.</p>
        <button className='dr-button'>viwe more video</button>
        </article>
      
      </section>
    </>
  )

}
export default Contact