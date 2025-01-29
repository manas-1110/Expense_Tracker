import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
        }
    }, [token]);

    const addIncome = async (income) => {
        try {
            console.log("Token being sent:", token);
            const response = await axios.post(`${BASE_URL}add-income`, income, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Handle success (e.g., update state, show message)
        } catch (err) {
            console.error("Error adding income:", err.response.data.message);
            setError(err.response.data.message);
        }
    };

    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-incomes`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIncomes(response.data);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-expenses`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setExpenses(response.data);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const addExpense = async (expense) => {
        try {
            console.log("Token being sent:", token);
            const response = await axios.post(`${BASE_URL}add-expense`, expense, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setExpenses((prevExpenses) => [...prevExpenses, response.data]);
        } catch (err) {
            console.error("Error adding expense:", err.response.data.message);
            setError(err.response.data.message);
        }
    };

    const login = async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}auth/login`, credentials);
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("userName", user.name);
            setToken(token);
            setUserName(user.name);
            setIsAuthenticated(true);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post(
                `${BASE_URL}auth/register`,
                userData
            );
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            setToken(token);
            setUserName(user.name);
            setIsAuthenticated(true);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        setToken(null);
        setIsAuthenticated(false);
        setUserName("");
    };

    return (
        <GlobalContext.Provider
            value={{
                incomes,
                expenses,
                addIncome,
                getIncomes,
                addExpense,
                getExpenses,
                login,
                register,
                logout,
                isAuthenticated,
                userName,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
