import React, { useState } from 'react';
import './Feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/Login')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
  
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleSubjectChange = (event)=>{
//     setSubject(event.target.value);
//   }
//   const handleMessageChange = (event)=>{
//     setMessage(event.target.value);
//   }
  
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     // if (!email || !password) {
//     //   alert("please enter Email and password.");
//     //   return;
//     // }
//     // Add your login logic here
//     console.log('Login form submitted');
//     console.log('Email:', email);
//     console.log('Name:', Name);
//     console.log('Subject',Subject);
//     console.log('Message',Message);
//   //  Navigate('/Home')
//   };

  return (
    <div className="down">
      <div className="login-form">
        <div>

<h2>FEEDBACK</h2>
        </div>
        <div>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          /><br></br>
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          /><br></br>
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          /><br></br>
            <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          /><br></br>

          <div className="button">
          <button type='submit' onChange={handleSubmit}>Submit</button>
         
          </div>
        </form>
        </div>
      </div>
    </div>

  );
};

export default FeedForm;