import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Login from './LoginPage.js';
import SignupPage from './SignupPage';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { useSelector } from 'react-redux'
// import { selectUser } from '../redux/userSlice'

const Home = () => {
  // const user=useSelector(selectUser)
  return (
    <div>
      {/* <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/courses">Course info</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Application form">Application form</Link>
          </li>
          <li className="navbar-item">
            <Link to="/payment">Payment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Login">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Register/Signup</Link>
          </li>
        </ul>
      </nav> */}
      
      <div className="content">
      <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			Restaurant Reservation
		</text>
	</svg>
</div>
        <p>ENJOY YOUR MEAL</p>
      </div>
      <div>
      <nav className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/pro">Profile</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Login">Logout</Link>
          </li>
        </ul>
      </nav>
      </div>
      <footer class='footer'>
      <div class="footer-content">
    <p>© 2023 Your Company. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="#"></a><TwitterIcon/></li>
      <li><a href="#"></a><InstagramIcon/></li>
      <li><a href="#"></a><LinkedInIcon/></li>
      <li><a href="#"></a><FacebookIcon/></li>
    </ul>
  </div>
</footer>
    </div>
    
  );
};

export default Home;
