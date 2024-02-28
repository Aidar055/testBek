import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordConfirm] = useState("");
  const { handleRegster, setError, error } = useAuth();
  const handleSave = () => {
    if (!email.trim() || !password.trim() || !passwordComfirm.trim()) {
      alert("тормози да ээээ, заполни все поля вася");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordComfirm);
      console.log(formData);
      handleRegster(formData);
    }
  };

  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <div className="register__inputs">
          {error ? <h2>{error}</h2> : null}
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Register;
