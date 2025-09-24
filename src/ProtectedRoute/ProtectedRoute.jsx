

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  //if (!token) {
    //return <Navigate to="/auth/login" replace />;
  //}
  return children;
}