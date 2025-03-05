import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerImage from '../../../images/register.png';
import {HiHashtag} from 'react-icons/hi';
import {FaUser} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {PiPasswordFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

export const RegisterPage = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }
    else
    {
    alert("Account created! Please log in.");
    navigate('/login');
    }
  };


  return (
    <div className='RegisterContainer'>
      <div className='RegisterCard'>
      <div className="image-section">
        <img src={registerImage} alt="register-image" />
      </div>
    <div className='RegisterSection'>
        <form action="register" method="post" onSubmit={handleRegister}>
            <h1>Registration !</h1>
            <div className="textbox">
            <input type="text" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}required/>
            <HiHashtag className="icon"/>
            </div>
            <div className="textbox">
            <input type="text" placeholder="Username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>
            <FaUser className="icon"/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            <MdEmail className="icon"/>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
            <PiPasswordFill  className="icon"/>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <PiPasswordFill  className="icon"/>
            </div>
            <button type="submit" className="Registerbtn">Register</button>
            <div className="register-link">
            <p>Already have an account? <Link to='/LoginPage'>Login here</Link></p>
            </div>
        </form>
    </div>
        </div>
    
    </div>
  )
}
export default RegisterPage;