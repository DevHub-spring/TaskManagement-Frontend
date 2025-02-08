import React from 'react';
import './App.css';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterForm';
//import Sidebar from './Components/Layouts/Sidebar';

function App() {
  return (
    <div>
      <Loginpage />
      <RegisterForm/>
    </div>
  );
}

export default App;
