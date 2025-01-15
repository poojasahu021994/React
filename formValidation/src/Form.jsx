import { useState } from "react"
import Login from "./Login"

const Form = () =>{


    let [inputname,setInput] = useState({
        name:'',
        email:'',
        mobile:''
    })

    
    let [status,setStatus] = useState(false)

    function hinput(event){
        let {name,value} = event.target;

        setInput({
            ...inputname,
            [name]:value

        })
    }

    const finalSubmit =(event) =>{
        event.preventDefault();

        if(inputname.name == "" || inputname.email == "" || inputname.mobile == "" )
        {
            alert("empty")
        }

       else
       {
         localStorage.setItem('userdata', JSON.stringify(inputname))
         setStatus(true)
       }

        console.log(inputname)

    }

    if(status)
    {
        return <Login />
    }
    

    return(
        <>
        <form onSubmit={finalSubmit}>
            
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={inputname.name} onChange={hinput}/> <br />
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={inputname.email} onChange={hinput}/> <br />
            <label htmlFor="">Mobile</label>
            <input type="text" name="mobile" value={inputname.mobile} onChange={hinput}/> <br />
            <input type="submit"  />

        </form>
        
        </>
    )
}

export default Form