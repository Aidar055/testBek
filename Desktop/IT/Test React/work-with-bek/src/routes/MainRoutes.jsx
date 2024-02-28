import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h2>not found</h2>} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
