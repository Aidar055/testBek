import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/Const";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  // ! register
  const [error, setError] = useState(false);
  const handleRegster = async (formData) => {
    try {
      await axios.post(`${API}/account/register/`, formData);
      navigate("/login");
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  };
  // ! LOGIN
  const hanldeLogin = async (formData, email) => {
    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  };
  const values = {
    handleRegster,
    setError,
    error,
    hanldeLogin,
    currentUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
