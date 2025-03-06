import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './Components/Pages/LoginForm/Loginpage';
import RegisterForm from './Components/Pages/RegisterForm/RegisterPage';
import ForgotPage from './Components/Pages/ForgotForm/ForgotPage';
import ProtectedLayout from './Components/ProtectedLayout';
import Dashboard from './Components/Pages/DashBoard/Dashboard';
import SideBarPage from './Components/Pages/SideBar/SideBarPage';
import KanbanPage from './Components/Pages/AllTasks/KanbanPage';
import Profile from './Components/Pages/ProfilePage/Profile';
import { AuthProvider, useAuth } from './Components/AuthContext';
import './App.css';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Loginpage onLogin={login} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot" element={<ForgotPage />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route path="/" element={<ProtectedLayout onLogout={logout} />}>
            <Route
              path="/dashboard"
              element={
                <>
                  <SideBarPage />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/kanban"
              element={
                <>
                  <SideBarPage />
                  <KanbanPage />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <SideBarPage />
                  <Profile />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

const WrappedApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default WrappedApp;