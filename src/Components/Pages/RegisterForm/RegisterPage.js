import React from 'react';
import registerImage from '../../../images/register.png';
import {HiHashtag} from 'react-icons/hi';
import {FaUser} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {PiPasswordFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

export const RegisterPage = () => {
  return (
    <div className='RegisterContainer'>
      <div className='RegisterCard'>
      <div className="image-section">
        <img src={registerImage} alt="register-image" />
      </div>
    <div className='RegisterSection'>
        <form action="register" method="post">
            <h1>Registration !</h1>
            <div className="textbox">
            <input type="text" placeholder="First Name" name="firstname" required/>
            <HiHashtag className="icon"/>
            </div>
            <div className="textbox">
            <input type="text" placeholder="Last Name" name="lastname" required/>
            <HiHashtag className="icon"/>
            </div>
            <div className="textbox">
            <input type="text" placeholder="Username" name="username" required/>
            <FaUser className="icon"/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Email" name="email" required/>
            <MdEmail className="icon"/>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Password" name="password" required/>
            <PiPasswordFill  className="icon"/>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Confirm Password" name="confirmpassword" required/>
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