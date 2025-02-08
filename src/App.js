import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterForm';
//import Sidebar from './Components/Layouts/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Loginpage/>} />
        <Route path="/Registerpage" component={<RegisterForm/>} />
      </Routes>
    </Router>
    <div>
      <Loginpage />
      <RegisterForm/>
    </div>
  );
}

export default App;
