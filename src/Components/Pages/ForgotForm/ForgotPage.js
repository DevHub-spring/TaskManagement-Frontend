import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPage.css';

export const ForgotPage = () => {
    return (
    <div className="forgotcontainer">
     <div className="Forgot-Page">
        <h1>Forgot Password?</h1>
        <form action="forgot" method="post">
            <div className="textbox">
            <input type="email" placeholder="Email" name="email" required/>
            </div>
            <button type="submit" className="Forgotbtn">Submit</button>
            <div className="register-link">
            <p>Remember your password? <Link to='/LoginPage'>Login here</Link></p>
            </div>
            </form>
     </div>
     </div>
      
    );
  };
  export default ForgotPage