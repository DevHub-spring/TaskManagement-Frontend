 import React from 'react';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import ForgotPage from './Components/Pages/ForgotForm/ForgotPage';
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import SideBar from './Components/Pages/SideBar/SideBarPage';
import Dashboard from './Components/Pages/DashBoard_Components/Dashboard';
import './App.css';
import KanbanPage from './Components/Pages/All_Tasks_page/KanbanPage';
import TaskModal from './Components/Pages/Task/Taskmodal';
const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// // HOC to check authentication
// const ProtectedLayout = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem("authToken"); // Example auth check
//   return isAuthenticated ? (
//     <div className="flex">
//       <SideBar />
//       <div className="flex-grow p-6">{children}</div>
//     </div>
//   ) : (
//     <Navigate to="/loginpage" />
//   );
// };


export default App;
