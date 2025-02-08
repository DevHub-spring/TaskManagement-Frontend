import React from 'react'
import registerImage from '../../../images/register.png'

export const RegisterPage = () => {
  return (
    <div className='RegisterContainer'>
    <div className="image-section">
        <img src={registerImage} alt="register-image" />
    </div>
    <div className='RegisterSection'>
        <form action="register" method="post">
            <h1>Registration !</h1>
            <div className="textbox">
            <input type="text" placeholder="First Name" name="firstname" required/>
            </div>
            <div className="textbox">
            <input type="text" placeholder="Last Name" name="lastname" required/>
            </div>
            <div className="textbox">
            <input type="text" placeholder="Username" name="username" required/>
            </div>
            <div className="textbox">
            <input type="email" placeholder="Email" name="email" required/>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Password" name="password" required/>
            </div>
            <div className="textbox">
            <input type="password" placeholder="Confirm Password" name="confirmpassword" required/>
            </div>
            <button type="submit" className="Registerbtn">Register</button>
            <div className="register-link">
            <p>Already have an account? <a href="#">Login here</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}
export default RegisterPage;