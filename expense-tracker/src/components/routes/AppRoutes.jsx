import { Routes, Route, Navigate } from "react-router-dom";

// import Landing from "../../pages/landing/Landing.jsx";
import Landing from "../../pages/landing/Landing.jsx";
import Signup from "../../pages/auth/Signup.jsx";
import Dashboard from "../../pages/dashboard/dashboard.jsx";
// import PrivateRoute from "../../components/auth/PrivateRoute.jsx";
import PrivateRoute from "../../components/auth/PrivateRoute";
import VerifyOtp from "../../pages/auth/VerifyOtp.jsx";
import Login from "../../pages/auth/Login.jsx";


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
