import React from 'react';
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role !== "admin") {
    // If not admin, redirect to regular dashboard
    return <Navigate to="/user-dashboard" />;
  }

  return children;
};

export default AdminProtectedRoute;
