import React from 'react';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import './App.css';
//import Sidebar from './Components/Layouts/Sidebar';

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/loginpage" />} /> {/* Redirect to /loginpage */}
        <Route path="/LoginPage" element={<Loginpage/>} />
        <Route path="/Registerpage" element={<RegisterForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
