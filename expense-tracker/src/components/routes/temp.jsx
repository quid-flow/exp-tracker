import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../../pages/landing/Landing";
import Signup from "../../pages/auth/Signup";
import Dashboard from "../../pages/dashboard/Dashboard";
import PrivateRoute from "../../components/auth/PrivateRoute";
import VerifyOtp from "../../pages/auth/VerifyOtp";
import Login from "../../pages/auth/login";


const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />

      

      <Route
        path="/login"
        element={token ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route
        path="/signup"
        element={token ? <Navigate to="/dashboard" replace /> : <Signup />}
      />

      <Route 
        path="/verify-otp" element={<VerifyOtp />}
      />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
};

export default AppRoutes;
