 import React from 'react';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import ForgotPage from './Components/Pages/ForgotForm/ForgotPage';
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import SideBar from './Components/Pages/SideBar/SideBarPage';
import Clock from './Components/Pages/DashBoard_Components/Clock/Clock';
import Weather from './Components/Pages/DashBoard_Components/weather/Weather';
import './App.css';

const App = () => {
  return (
    <div>
      <Clock/>
      <Weather/>
    </div>
    // <Router>
    //   <Routes>
    //   <Route path="/" element={<Navigate to="/loginpage" />} /> {/* Redirect to /loginpage */}
    //     <Route path="/loginpage" element={<Loginpage/>} />
    //     <Route path="/registerpage" element={<RegisterForm/>} />
    //     <Route path="/forgotpage" element={<ForgotPage/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
