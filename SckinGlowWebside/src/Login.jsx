import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  let [inputData, setInputData]= useState({
    name: '',
    email: '',
    password: ''
  });

  let [udata, setUdata] = useState(null);
  let [message, setMessage] = useState(''); 

  function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
}

  const LoginSubmit = (e) => {
    e.preventDefault();

    if (udata) {
      
      if (
        inputData.name === udata.name &&
        inputData.email === udata.email &&
        inputData.password === udata.password
      ) {
        setMessage('Login Successful..!');
      } else {
        setMessage('Account not found');
      }
    } else {
      setMessage('User data not found in local storage');
    }
  };

  useEffect(() => {
    let logindata = JSON.parse(localStorage.getItem('userdata'));
    setUdata(logindata);
  }, []);

  return (
    <>
    <section className="login-section">
      <form className="login_contener" onSubmit={LoginSubmit}>
      <div className="header">
        <h2>Login Page</h2>
        <div><Link id='link-btn' to="/signup">No account yet? Signup.</Link></div>
                <span>or signup with</span>
          <div className="socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google-plus"></i>
            <i className="fab fa-linkedin"></i>
          </div>
      </div>
      <div className='input_filed'>
        
        <input type="text" placeholder="  Enter your name" name="name" value={inputData.name} onChange={handleData} /> 
        <br />
        <input type="text" placeholder="  Enter Email Address" name="email" value={inputData.email} onChange={handleData} /> 
        <br />
        <input type="text" placeholder="  Enter Password" name="password" value={inputData.password} onChange={handleData} /> 
        <br />
        <button id='btn' type='submit'>login</button>
        {/* <input type="submit" /> */}
      </div>

      </form>
      <p>{message}</p> 
      </section>
    </>
  );
};

export default Login;