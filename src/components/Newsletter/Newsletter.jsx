import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get exclusive offers on your email</h1>
      <p>Subscribe to our Newsletter!!!</p>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
