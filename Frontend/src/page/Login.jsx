import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const baseURL = "http://localhost:8080/login";
  const baseURL = "https://juhosi-api.onrender.com/login";
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("id",form.id)
    axios
      .post(baseURL, form)
      .then((res) => {
        // console.log("Login",res.data);
        if (res.data.data.id !== "admin") {
          navigate("/customer");
        } else {
          navigate("/admin");
        }
      })
      .catch((error) => {
        alert("user not found");
      });
  };
  return (
    <div>
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => {
            setForm({ ...form, id: e.target.value });
          }}
          type="text"
          placeholder="Enter id"
        />
        <br />
        <input
          required
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          type="text"
          placeholder="Enter password"
        />
        <br />
        <input
          style={{
            background: "blue",
            borderRadius: "5px",
            width: "180px",
            marginTop: "20px",
            fontWeight: "bold",
            border: "3px solid blue",
          }}
          type="submit"
          value={"SIGN IN"}
        />
      </form>
    </div>
  );
};

export default Login;
