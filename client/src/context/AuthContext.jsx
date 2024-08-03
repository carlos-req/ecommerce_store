/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const API_URL = "http://localhost:5080/api/users/";

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (userData) => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}register`, userData);
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            return response.data;
        } catch (err) {
            const errorMessage =
                err.response?.data?.message || "Registration failed";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const login = async (userData) => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}login`, userData);
            localStorage.setItem("user", JSON.stringify(response.data));
            setUser(response.data);
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Login failed";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const checkAuth = () => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const contextValue = {
        user,
        loading,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
