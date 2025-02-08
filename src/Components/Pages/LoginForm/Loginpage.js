import React from 'react';
import './Loginpage.css';
import { FaUser,FaLock } from "react-icons/fa";
import loginImage from '../../../images/login.png';

export const Loginpage = () => {
  return (
    <div className="logincontainer">
      <div className="image-section">
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="loginSection">
        <form action="login" method="post">
          <h1>Login</h1>
          <div className="textbox">
            <input type="text" placeholder="Username" name="username" required/>
            <FaUser className="icon"/>
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" name="password" required/>
            <FaLock className="icon"/>
          </div>
          <div className="rememberme-forgot">
            <label>
              <input type="checkbox" name="rememberme" /> Remember me
            </label>
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className="loginbtn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register here</a></p>
          </div>
        </form>
    </div>
    </div>
    
  );
};
export default Loginpage