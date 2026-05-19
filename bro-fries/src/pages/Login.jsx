import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import logo from "../images/logo.png";

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

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/dashboard");

    } else {

      alert(
        "Invalid Email or Password"
      );

    }

  };

  return (

    <div
      style={{
        background:
          "linear-gradient(135deg,#050816,#0f172a)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <div
        style={{
          background: "#111827",
          padding: "40px",
          borderRadius: "30px",
          width: "380px",
          color: "white",
          boxShadow:
            "0 0 30px rgba(255,180,0,0.3)"
        }}
      >

        {/* Logo */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >

          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border:
                "3px solid #ffb400",
              objectFit: "cover",
              boxShadow:
                "0 0 20px rgba(255,180,0,0.5)"
            }}
          />

          <h1
            style={{
              color: "#ffb400",
              marginTop: "15px",
              fontSize: "42px"
            }}
          >
            Bro Fries 🍟
          </h1>

          <p
            style={{
              color: "#94a3b8"
            }}
          >
            Login to continue
          </p>

        </div>

        {/* Inputs */}

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

        {/* Button */}

        <button
          onClick={handleLogin}
          style={buttonStyle}
        >
          Login
        </button>

        {/* Register Link */}

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#cbd5e1"
          }}
        >
          Don't have an account?{" "}

          <Link
            to="/register"
            style={{
              color: "#ffb400",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );
}

const inputStyle = {

  width: "100%",
  padding: "14px",
  marginTop: "15px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
  background: "#1e293b",
  color: "white",
  outline: "none"

};

const buttonStyle = {

  width: "100%",
  padding: "15px",
  marginTop: "25px",
  background: "#ffb400",
  border: "none",
  borderRadius: "12px",
  fontWeight: "bold",
  fontSize: "18px",
  cursor: "pointer",
  color: "black"

};

export default Login;