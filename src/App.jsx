import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUp';
import ProtectedRoute from '../Routes/ProtectedRoutes';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Route>
    </Routes>
  );
}

export default App;