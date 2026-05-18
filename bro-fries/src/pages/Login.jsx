import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    const storedUser = JSON.parse(
      localStorage.getItem(
        "brofriesUser"
      )
    );

    if (
      storedUser?.email === email &&
      storedUser?.password === password
    ) {

      // Save login status

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      // Open dashboard

      navigate("/dashboard");

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <div
        style={{
          background: "#111827",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          color: "white"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#ffb400"
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={buttonStyle}
        >
          Login
        </button>

      </div>

    </div>

  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "20px",
  background: "#ffb400",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer"
};

export default Login;