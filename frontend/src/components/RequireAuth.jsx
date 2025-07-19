
import React from 'react';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const rendarId = localStorage.getItem('rendarId');
  if (!rendarId) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default RequireAuth;
