import { useEffect, useState } from "react";

const Login = () => {
  let [inputname, setInput] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  let [udata, setUdata] = useState(null);
  let [message, setMessage] = useState(''); 

  function hinput(event) {
    let { name, value } = event.target;

    setInput({
      ...inputname,
      [name]: value
    });
  }

  const finalSubmit = (event) => {
    event.preventDefault();

    if (udata) {
      
      if (
        inputname.name === udata.name &&
        inputname.email === udata.email &&
        inputname.mobile === udata.mobile
      ) {
        setMessage('Login Successful!');
      } else {
        setMessage('Account not found');
      }
    } else {
      setMessage('No user data found in local storage');
    }
  };

  useEffect(() => {
    let logindata = JSON.parse(localStorage.getItem('userdata'));
    setUdata(logindata);
  }, []);

  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={finalSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={inputname.name} onChange={hinput} /> <br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={inputname.email} onChange={hinput} /> <br />
        <label htmlFor="">Mobile</label>
        <input type="text" name="mobile" value={inputname.mobile} onChange={hinput} /> <br />
        <input type="submit" />
      </form>

      <p>{message}</p> 
    </>
  );
};

export default Login;