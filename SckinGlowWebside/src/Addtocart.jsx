import axios from "axios"
import { useEffect, useState } from "react"
import './Addtocart.css'
useEffect

const Addtocart=()=>{
    let [api , setApi]=useState([]);
    let [frminp,setFrminp]=useState({
        name:"",
        price:"",
        status:""
    })
// insert
    const changeinp=(e)=>{
        let {name,value}=e.target;
        setFrminp({...frminp,[name]:value})
    }

    const submitform =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/Item',frminp)
        .then(r=>alert("inserted"))
    }
    
    useEffect(()=>{
        axios.get("http://localhost:3000/item")
        .then((res)=>{
            setApi(res.data)
        })
    },[])

    return (
        <>
        {
        api.map((e, index)=>{
            return(
                <div className="item-div">
                    <div>{e.name}</div>
                    <div>{e.price}</div>
                    <div>{e.status}</div>
                </div>
            )
        })
    }
        
        <div className="addtocart-div">
        <form onSubmit={submitform} >
            <label htmlFor="name">Name</label>
            <input type="text" value={frminp.name}  name="name" onChange={changeinp}/> <br />

            <label htmlFor="price">Price</label>
            <input type="text" value={frminp.price} name="price" onChange={changeinp}/> <br />

            <label htmlFor="status">Status</label>
            <input type="text" value={frminp.status} name="status" onChange={changeinp}/> <br />

            <input type="submit" />
          </form>
          </div>
        </>
    )
}
export default Addtocart