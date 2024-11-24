import React from "react";
import "./css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
          <input type="password" name="pass" id="pass" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an Account?<span> Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="agree" id="agree" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
