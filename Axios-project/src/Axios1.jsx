
import { useEffect, useState } from "react";
import axios from "axios";

function Axios1(){
    let [api , setApi]=useState([]);
    let [frminp,setFrminp]=useState({
        name:"",
        age:"",
        contact:"",
        city:""
    })
// insert
    const changeinp=(e)=>{
        let {name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }

    const submitform =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/Data',frminp)
        .then(r=>alert("inserted"))
    }

// Delete
    function del (id){
        axios.delete(`http://localhost:3000/Data/${id}`)
        .then((res)=>{alert("deleted....!!!!")})

    }
    useEffect(()=>{
        axios.get("http://localhost:3000/Data")
        .then((res)=>{
            setApi(res.data)
        })
    },[del])
// Edit
let [frmvisitble, setfrmvisitble] = useState(false);
let [editdata, setEditdata] =useState({})
function hinput(e){
    let {name,value}=e.target;
    setEditdata({...editdata,[name]:value})
}

    return(
        <>
<table border="">
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Address</th>
        <th>Delete</th>
        <th>Edit</th>
        </thead>
        <tbody>
            {
                api.map((e , index)=>{
                    return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                        <td><button onClick={()=>del(e.id)}>Delete</button></td>
                        <td><button onClick={()=>{setfrmvisitble(true), setEditdata(e)}}>Edit</button></td>
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
{/* edit form */}
    {frmvisitble && 
    <form>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" value={editdata.id} onChange={hinput} /><br></br>

        <label htmlFor="id">Name</label>
        <input type="text" name="name" value={editdata.name} onChange={hinput} /><br></br>
        
        <label htmlFor="id">Email</label>
        <input type="text" name="email"value={editdata.email} onChange={hinput} /><br></br>

        <label htmlFor="id">Age</label>
        <input type="text" name="age"value={editdata.age} onChange={hinput} /><br></br>

        <label htmlFor="id">City</label>
        <input type="text" name="city"value={editdata.city} onChange={hinput} /><br></br>

        <input type="submit" />
    </form>
    }
    {/* insert form */}
    <br></br>
    <form onSubmit={submitform}>
            <label htmlFor="name">Name</label>
            <input type="text" value={frminp.name}  name="name" onChange={changeinp}/> <br />

            <label htmlFor="email">Email</label>
            <input type="email" value={frminp.email} name="email" onChange={changeinp}/> <br />

            <label htmlFor="age">Age</label>
            <input type="text" value={frminp.age} name="age" onChange={changeinp}/> <br />

            <label htmlFor="contact">Contact</label>
            <input type="text" value={frminp.contact} name="contact" onChange={changeinp}/> <br />

            <label htmlFor="city">City</label>
            <input type="text" value={frminp.city} name="city" onChange={changeinp}/> <br />

            <input type="submit" />
          </form>
        </>
    )
}
export default Axios1