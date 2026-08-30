import React from 'react';
import { Navigate } from "react-router-dom";

const EditorProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Admins or Editors can access editor routes
  if (role !== "editor" && role !== "admin") {
    return <Navigate to="/user-dashboard" />;
  }

  return children;
};

export default EditorProtectedRoute;
