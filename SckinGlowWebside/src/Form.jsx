import React, {useEffect, useState} from 'react'
import Login from './Login';
import { Link } from 'react-router-dom';
function Form(){
    const data= {name:"",mobile:"",email:"",password:""};
    const[inputData, setInputData]= useState(data)
    const [flag, setFlag] = useState(false)
    let [status,setStatus] = useState(false)
    useEffect(()=>{
        
    },[status])

    useEffect(()=>{
       
    },[flag])

    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    function finalSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.mobile || !inputData.email || !inputData.password)
    {
        alert("All field are Mandatory")
    }
    else{
        localStorage.setItem('userdata', JSON.stringify(inputData))
        setFlag(true),setStatus(true)
    }
    console.log(inputData)
        }

        
        if(status)
            {
                
                return <Login />
            }
    return(
        <>
        <section className="signup-section">
        <pre className='finalAns'>{(status)?<h2 className='u'>Hello {inputData.name} You've Registered Successfully</h2>:""}</pre>
        <form className="contener" onSubmit={finalSubmit}>
            <div className="header">
                <h2>Registration Form</h2>
                {/* <div><img src="https://static.vecteezy.com/system/resources/previews/050/980/771/non_2x/3d-programming-developer-working-on-project-illustration-png.png" alt="" height="150px" width="150px"/></div> */}
            <div><Link id='link-btn' to="/login">Already have an account? Signin.</Link></div>
                <span id='signup-with'>or signup with</span>
          <div className="socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google-plus"></i>
            <i className="fab fa-linkedin"></i>
          </div>
            </div>
            <div className='input_filed'>
                <input type="text" placeholder="  Enter your Name" 
                name="name"  value={inputData.name} onChange={handleData}/>
            <br></br>
                <input type="text" placeholder="  Enter your Number" 
                name="mobile" value={inputData.mobile} onChange={handleData}/>
            <br></br>
                <input type="text" placeholder="  Enter your Email" 
                name="email" value={inputData.email} onChange={handleData}/>
            <br></br>
                <input type="text" placeholder="  Enter your password" 
                name="password"  value={inputData.password} onChange={handleData}/>
            <br></br>
            
                <button id='btn' type='submit'>Submit</button>
            </div>
            {/* <input type='submit'>Submit</input> */}
        </form>
        </section>
        </>
    )
}
export default Form