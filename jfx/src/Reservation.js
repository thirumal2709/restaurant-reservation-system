import React, { useState } from 'react';
import './Reservation.css';
import { Link } from 'react-router-dom';

const Reservation = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [members, setMembers] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any of the required fields are empty
    if (!userName || !phoneNumber || !members) {
      setErrorMessage('Please fill in all the fields.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="mm">Reservation</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <fieldset className="login-fieldset">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            UserName
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            className="form-input"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="members" className="form-label">
            No.Of.Members
          </label>
          <input
            type="number"
            id="members"
            name="members"
            className="form-input"
            required
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>
        
        <button type="submit" className="login-button">
          <Link to='/Home'>
          Reserve
          </Link>
        </button>

      </fieldset>
    </form>
  );
};

export default Reservation;