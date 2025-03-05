 import React,{useState,useEffect} from 'react';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import ForgotPage from './Components/Pages/ForgotForm/ForgotPage';
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import ProtectedLayout from './Components/ProtectedLayout';
import Dashboard from './Components/Pages/DashBoard/Dashboard';
import './App.css';
import KanbanPage from './Components/Pages/AllTasks/KanbanPage';
import Profile from './Components/Pages/ProfilePage/Profile';


const App=()=>{
  const[isAuthenticated,setIsAuthenticated]=React.useState(false);

  // Check localStorage for authentication status
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);


  //Mock Authentication
  const handelLogin=()=>{setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true');
  };
  const handelLogout=()=>{setIsAuthenticated(false)
    localStorage.removeItem('isAuthenticated');
  };

  return(
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Loginpage onLogin={handelLogin}/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot" element={<ForgotPage />} />
        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route path="/" element={<ProtectedLayout onLogout={handelLogout} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kanban" element={<KanbanPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        ):(
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};
export default App;
