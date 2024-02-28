import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./auth.css";
const Login = () => {
  const { hanldeLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const handleSave = () => {
    if (!email.trim() || !passowrd.trim()) {
      alert("зополни да ээээ");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", passowrd);
      hanldeLogin(formData, email);
    }
  };
  return (
    <>
      <div className="login">
        <h2>Login</h2>
        <div className="login__inputs">
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="passowrd"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSave}>login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
