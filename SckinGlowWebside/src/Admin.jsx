import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './Update.css'
const Admin=()=>{
     let [api,setApi] = useState([])

     function del (id){
            axios.delete(`http://localhost:3000/PesentData/${id}`)
            .then((res)=>{alert("deleted....!!!!")})
    
        }
        useEffect(()=>{
            axios.get("http://localhost:3000/PesentData")
            .then((res)=>{
                setApi(res.data)
            })
        },[del])

        // Edit section
        let [frmvisitble, setfrmvisitble] = useState(false);
        let [editdata, setEditdata] =useState({})
        function hinput(e){
            let {name,value}=e.target;
            setEditdata({...editdata,[name]:value})
        }

        // Update data

        function UpdateData(e){
            // e.preventDefault();
            axios.put(`http://localhost:3000/PesentData/${editdata.id}`,editdata)
            .then(r=>alert("Updated..."))
        }

    return( 
        <>
{/* Edit form */}


{frmvisitble && 
<div className="appointment-container">
        <h2 id='edit-hedding'>Edit an Appointment Details</h2>
        <form className="appointment-form" onSubmit={UpdateData}>
          <label htmlFor="name">Full Name</label>
          <input type="text" value={editdata.name} id="name" name="name" placeholder="Enter your full name" onChange={hinput} required />
          <br></br>
          <label htmlFor="email">Email Address</label>
          <input type="email" value={editdata.email} id="email" name="email" placeholder="Enter your email" onChange={hinput} required />
          <br></br>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" value={editdata.phone} id="phone" name="phone" placeholder="Enter your phone number" onChange={hinput} required />
          <br></br>
          <label htmlFor="date">Preferred Date</label>
          <input type="date" value={editdata.date} id="date" name="date" onChange={hinput} required />
          <br></br>
          <label htmlFor="time">Preferred Time</label>
          <input type="time" value={editdata.time} id="time" name="time" onChange={hinput} required />
          <br></br>
          <label htmlFor="message">Additional Notes</label>
          <textarea value={editdata.message} id="message" name="message" rows="4" placeholder="Enter any additional details" onChange={hinput}></textarea>
          <br></br>
          <button className='summit-button' type="submit">Submit</button>
        </form>
      </div>
      }
      
{/* edit form end */}

        <div className="container">
        <h2>User Information Table</h2>
        <table border=" ">
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Date</th>
        <th>Time</th>
        <th>Message</th>
        <th>Edit</th>
        <th>Delete</th>
        </thead>
        <tbody>
            {
            api.map((e,index)=>{
                    return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.date}</td>
                        <td>{e.time}</td>
                        <td><div className='details-div'>{e.message}</div></td>
                        <td ><button className='edit-btn' onClick={()=>{setfrmvisitble(true), setEditdata(e)}}>Edit</button></td>
                        <td ><button className='delete-btn' onClick={()=>del(e.id)}>Delete</button></td>
    
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
        </>
    )
}
export default Admin