import React,{useState} from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { FaUser,FaLock } from "react-icons/fa";
import loginImage from '../../../images/login.png';
import { Link } from 'react-router-dom';

const LoginPage=()=>{
const navigate = useNavigate();
const { login } = useAuth();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handelSubmit=(e)=>{
  e.preventDefault();
  console.log("Form Submitted");
  //Mock Authentication
  if(email === "test@example.com" && password === "password"){
    console.log("Login Success");
    debugger;
    login();
    navigate('/dashboard');

}else
{
  alert("Invalid Credentials");
}
}
  return (
    <div className="logincontainer">
      <div className="loginCard">
      <div className="image-section">
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="loginSection">
        <form action="login" method="post" onSubmit={handelSubmit}>
          <h1>Login</h1>
          <div className="textbox">
            <input type="text" placeholder="Username" value={email} name="username" onChange={(e) => setEmail(e.target.value)} required/>
            <FaUser className="icon"/>
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <FaLock className="icon"/>
          </div>
          <div className="rememberme-forgot">
            <label>
              <input type="checkbox" name="rememberme" /> Remember me
            </label>
            <div className="forgotpage-link">
            <p><Link to="/ForgotPage">Forgot your password?</Link></p>
          </div>
          </div>
          <button type="submit" className="loginbtn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to="/RegisterPage">Register here</Link></p>
          </div>
        </form>
        </div>
      </div>
    </div>
    
  );
};
export default LoginPage;