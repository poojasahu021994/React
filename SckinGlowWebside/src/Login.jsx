import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: ''
  });
  let nav = useNavigate()
let[dash , setDash] = useState(false)
  let [udata, setUdata] = useState(null);
  let [message, setMessage] = useState(''); 

  function handleData(e) {
    let{name , value} = e.target
    setInputData({ ...inputData, [name]: value });
  }

  const LoginSubmit = (e) => {
    e.preventDefault();
        if (
          inputData.name === udata.name &&
          inputData.email === udata.email &&
          inputData.password === udata.password
        ) {
          setMessage('Login Successful..!')
          // alert('Login Successful..!');
          setDash(true)
        } else {
          setMessage('Account not found')
          // alert('Account not found');
        }
      }
      if(dash)
      {
          nav("/")
      }
      
  // };

  useEffect(() => {
    let logindata = JSON.parse(localStorage.getItem('userdata'));
    if (logindata) {
      setUdata(logindata);
    }
  }, []);

  return (
    <>
      <section className="login-section">
        <form className="login_contener" onSubmit={LoginSubmit}>
          <div className="header">
            <h2>Login Page</h2>
            <div>
              <Link id="link-btn" to="/signup">No account yet? Signup.</Link>
            </div>
            <span>or signup with</span>
            <div className="socials">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-google-plus"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="input_filed">
            <input 
              type="text" 
              placeholder="Enter your name" 
              name="name" 
              value={inputData.name} 
              onChange={handleData} 
            /> 
            <br />
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              name="email" 
              value={inputData.email} 
              onChange={handleData} 
            /> 
            <br />
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              value={inputData.password} 
              onChange={handleData} 
            /> 
            <br />
            <button id="btn" type="submit">Login</button>
          </div>
        </form>
        <p>{message}</p> 
        
      </section>
    </>
  );
};

export default Login;
