import React, { useState } from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom'
import Home from './Home';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/userSlice';

import SignupPage from './SignupPage';

const LoginPage = () => {
  // const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    email:'',
    password: ''
  })

  const eventNavigate =()=>{
    Navigate("/feed");
  }

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const submitHandler = (e) => {

    console.log(formdata.username,formdata.email,formdata.password)
    
    e.preventDefault();
    // dispatch(login({
    //   username :formdata.username
    // }))
    Navigate('/Home')
  }

  return (
    
    <div className='whole-page'>
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            // value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">UserName:</label>
          <input
            type="name"
            id="username"
            // value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            // value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit"><Link to="/Home" >LOGIN</Link></button>   
        <br>
        </br> 
    <button type="submit" onClick={eventNavigate}>FeedBack</button>
      </form>
      <div className='text'>New to Website ? <Link to="/" >Signup</Link></div>
      
    </div>
    </div>
    
  );
};

export default LoginPage;