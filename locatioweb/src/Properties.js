import React from 'react';
import './Properties.css'; // Import the CSS file

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>

        {/* Buttons */}
        <div className="navbar-buttons">
          <button className="navbar-button">Home</button>
          <button className="navbar-button">Properties</button>
          <button className="navbar-button">Contact</button>
          <button className="navbar-button">Reviews</button>
        </div>
      </nav>

      {/* Rest of your homepage content */}
      <div className="content">
        {/* Your homepage content goes here */}
      </div>

      {/* Helpbar */}
      <div className="helpbar">
        <div className="helpbar-item">
          <h4>Contact Information:</h4>
          <p>Phone: 613-716-1234</p>
          <p>Email: locatio@airbnb.com</p>
          <p>Address: 716 Jeremy St, Gatineau, QC</p>
        </div>
        <div className="helpbar-item">
          <h4>Hours:</h4>
          <p>Open 24/7</p>
        </div>
        <div className="helpbar-item">
          <h4>Service Areas:</h4>
          <p>Ottawa, ON</p>
          <p>Gatineau, QC</p>
        </div>
      </div>
    </div>
  );
}

export default App;