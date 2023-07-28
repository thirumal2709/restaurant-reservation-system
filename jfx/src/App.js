import React from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './LoginPage.css';
import SignupPage from './SignupPage';
import './SignupPage.css';
import Home from './Home';
import Prof from './prot';
import  Card  from "./Card";
import Reservation from './Reservation';
import FeedForm from './FeedBack';
// import Classicrestaurants from "./Classicrestaurants";
const App = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Routes>
    <Route path="/" element={<SignupPage/>}></Route>
    <Route path="/Login" element={<LoginPage/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/pro" element={<Prof/>}></Route>
    <Route path="/Restaurants" element={<Card/>}></Route>
    <Route path="/Reserve" element={<Reservation/>}></Route>
    <Route path ="/feed" element={<FeedForm/>}></Route>
    {/* <Route path="/reserv" element={<Classicrestaurants/>}></Route> */}
    
    </Routes>
    </div>
    </BrowserRouter>

  );
};

export default App;