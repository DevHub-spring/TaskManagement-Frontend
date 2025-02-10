 import React from 'react';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import ForgotPage from './Components/Pages/ForgotForm/ForgotPage';
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import SideBar from './Components/Pages/SideBar/SideBarPage';
import './App.css';

const App = () => {
  return (
      <div>
        <SideBar />
        <main>
          <h2>Content</h2>
        </main>
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
