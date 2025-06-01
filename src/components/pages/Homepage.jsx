import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Background Image */}
      <div className="background-image" />

      {/* Overlay Content */}
      <div className="content">
        <h1>Welcome to Crestonix Global</h1>
        <p>Innovative Software Solutions for Your Business</p>
        <button>Explore</button>
      </div>

      {/* Scrollable Content */}
      <div className="extra-content">
        <h2>Scroll Down</h2>
        <p>This is extra content to enable scrolling.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>More content here... Keep adding to test scrolling behavior.</p>
      </div>
    </div>
  );
};

export default Homepage;
