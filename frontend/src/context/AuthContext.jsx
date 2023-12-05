// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const setUserIdContext = (id) => {
    setUserId(id);
  };

  return (
    <AuthContext.Provider value={{ userId, setUserIdContext }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
