//third-party 
import { Navigate } from 'react-router-dom';

//client imports
import { guardLogin } from '../../guards/auth';

export function ProtectedRoute({ children }) {
  if (guardLogin()) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}