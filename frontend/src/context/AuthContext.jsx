/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        // Lógica para realizar el inicio de sesión y actualizar el estado
        setIsAuthenticated(true);
        console.log('User is logged in:', isAuthenticated);
    };

    const logout = () => {
        axios.get('http://35.153.204.145:3003/api/auth/logout')
        .then(() => {
            setIsAuthenticated(false);
        })
        .catch((error) => {
            console.error('Logout failed:', error);
        });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
