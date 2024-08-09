import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const useAuth = () => {
  const user = { loggedIn: false }; // Example logic
  return user && user.loggedIn;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
