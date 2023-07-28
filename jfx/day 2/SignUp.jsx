import React, { useState } from 'react';
import './LoginForm.css';

const Signup = () => {
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastName]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFirstname =(event)=>{
    setFirstname(event.target.value);
  }
  const handleLastname=(event)=>{
    setLastName(event.target.value);
  }
  const handlePhonenumber=(event)=>{
    setPhonenumber(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    document.write('Successfully registerd');
    console.log('FirstName: ',firstname);
    console.log('LastName:',lastname);
    console.log('PhoneNumber:',phonenumber);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="down">
    <div className="login-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
        type='firstname'
        placeholder='FirstName'
        value={firstname}
        onChange={handleFirstname}
        required
        />
        <input
        type='lastname'
        placeholder='LastName'
        value={lastname}
        onChange={handleLastname}
        required
        />
        <input
        type='PhoneNumber'
        placeholder='PhoneNumber'
        value={phonenumber}
        onChange={handlePhonenumber}
        required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Register</button>
        {/* <link>Sign up</link> */}
      </form>
    </div>
    </div>
  );
};

export default Signup;