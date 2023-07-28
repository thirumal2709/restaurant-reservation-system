import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignupPage.css';
import { addProduct } from './api';
// import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const [formdata,setFormdata] = useState({
    name: '',
    password: ''
  }
  )
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addProduct(formdata);
      navigate('/Login')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');

  // const [errors, setErrors] = useState({});

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  // const handleMobileNumberChange = (e) => {
  //   setMobileNumber(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const validationErrors = validateForm();

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     // Perform registration logic here
  //     console.log('Username:', username);
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  //     console.log('Confirm Password:', confirmPassword);
  //     console.log('Mobile Number:', mobileNumber);

  //     // Clear form fields and errors
  //     setUsername('');
  //     setEmail('');
  //     setPassword('');
  //     setConfirmPassword('');
  //     setMobileNumber('');
  //     setErrors({});
  //   }
  // };

  // const validateForm = () => {
  //   const errors = {};

  //   if (!username) {
  //     errors.username = 'Username is required';
  //   }

  //   if (!email) {
  //     errors.email = 'Email is required';
  //   } else if (!isValidEmail(email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   if (!password) {
  //     errors.password = 'Password is required';
  //   } else if (password.length < 6) {
  //     errors.password = 'Password must be at least 6 characters long';
  //   }

  //   if (!confirmPassword) {
  //     errors.confirmPassword = 'Confirm Password is required';
  //   } else if (password !== confirmPassword) {
  //     errors.confirmPassword = 'Passwords do not match';
  //   }

  //   if (!mobileNumber) {
  //     errors.mobileNumber = 'Mobile Number is required';
  //   } else if (!isValidMobileNumber(mobileNumber)) {
  //     errors.mobileNumber = 'Invalid mobile number';
  //   }

  //   return errors;
  // };

  // const isValidEmail = (email) => {
  //   // Basic email validation using regex
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailPattern.test(email);
  // };

  // const isValidMobileNumber = (mobileNumber) => {
  //   // Basic mobile number validation using regex
  //   const mobileNumberPattern = /^\d{10}$/;
  //   return mobileNumberPattern.test(mobileNumber);
  // };

  return (
    <div className=''>
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="group">

        
          <label htmlFor="email">Name:</label>
          <input
            type="name"
            id="name"
            onChange={handleChange}
            required
          />
        
        
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            required
          />
       
          
        </div>
        <button type="submit" onSubmit={handleSubmit}>Register</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;