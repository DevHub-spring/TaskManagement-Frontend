
import { Link } from 'react-router-dom';
import './ForgotPage.css';
import ForgotImage from '../../../images/forgot.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPage = () => {

    const ForgotPassword = () => {
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const[password,setPassword]=useState('');
        const[confirmPassword,setConfirmPassword]=useState('');
        const handleReset = (e) => {
          e.preventDefault();
          alert("Password reset!");
          navigate('/login');
        };
      

    return (
    <div className="forgotcontainer">
        <div className="forgotCard">
        <div className="image-section">
            <img src={ForgotImage} alt="forgot-image" />
        </div>
     <div className="forgotSection">
        <h1>Forgot Password?</h1>
        <form action="forgot" method="post" onSubmit={handleReset}>
            <div className="textbox">
            <input type="password" placeholder="New Password" name="newPassword" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Current password" name="currentPassword" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
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
};
export default ForgotPage;