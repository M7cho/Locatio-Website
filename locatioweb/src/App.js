import React from 'react';
import './App.css'; // Import the CSS file

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
      <section className="about-section">
        <div className="about-content">
          <h2>About Locatio Inc</h2>
          <p>
            At Locatio Inc, we pride ourselves on providing exceptional accommodation experiences in the beautiful cities of Ottawa and Gatineau.
            As a premier Airbnb incorporation, we strive to connect travelers with unique and comfortable stays that capture the essence of these vibrant destinations.
            Come and experience the warmth of our hospitality, the charm of our properties, and the convenience of our prime locations.
          </p>
        </div>
      </section>
      <div className="content">
      </div>
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
