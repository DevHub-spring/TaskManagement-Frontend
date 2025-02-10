import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPage.css';
import ForgotImage from '../../../images/forgot.png';
export const ForgotPage = () => {
    return (
    <div className="forgotcontainer">
        <div className="forgotCard">
        <div className="image-section">
            <img src={ForgotImage} alt="forgot-image" />
        </div>
     <div className="forgotSection">
        <h1>Forgot Password?</h1>
        <form action="forgot" method="post">
            <div className="textbox">
            <input type="password" placeholder="New Password" name="newPassword" required/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Current password" name="currentPassword" required/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Email" name="email" required/>
            </div>
            <button type="submit" className="Forgotbtn">Submit</button>
            <div className="login-link">
            <p>Remember your password? <Link to='/LoginPage'>Login here</Link></p>
            </div>
            </form>
     </div>
        </div>
        
     </div>
      
    );
  };
  export default ForgotPage