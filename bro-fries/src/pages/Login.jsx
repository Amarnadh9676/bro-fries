import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import logo from "../images/logo.png";

import { supabase } from "../supabase";

import {
  ToastContainer,
  toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// LOADING SPINNER

import { Oval }
from "react-loader-spinner";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // LOADING STATE

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {

    // START LOADING

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({

        email,
        password,

      });

    // STOP LOADING

    setLoading(false);

    if (error) {

      toast.error(
        "Invalid Email or Password"
      );

    } else {

      toast.success(
        "Login Successful"
      );

      navigate("/dashboard");

    }

  };

  return (

    <div
      style={{
        background:
          "linear-gradient(135deg,#020617,#020c2b,#000814)",

        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding: "20px"
      }}
    >

      <div
        style={{
          background:
            "rgba(15,23,42,0.95)",

          width: "420px",

          padding: "45px",

          borderRadius: "35px",

          boxShadow:
            "0 0 40px rgba(255,180,0,0.35)",

          border:
            "2px solid rgba(255,180,0,0.4)",

          color: "white"
        }}
      >

        {/* Logo */}

        <div
          style={{
            textAlign: "center"
          }}
        >

          <img
            src={logo}
            alt="logo"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border:
                "4px solid #ffb400",
              objectFit: "cover",
              boxShadow:
                "0 0 30px rgba(255,180,0,0.6)"
            }}
          />

          <h1
            style={{
              color: "#ffb400",
              fontSize: "64px",
              marginTop: "20px",
              marginBottom: "10px",
              fontWeight: "bold"
            }}
          >
            Bro Fries 🍟
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "22px"
            }}
          >
            Login to continue
          </p>

        </div>

        {/* Email */}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        {/* Password */}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        {/* Forgot Password */}

        <div
          style={{
            textAlign: "right",
            marginTop: "15px"
          }}
        >

          <Link
            to="/forgotpassword"
            style={{
              color: "#ffb400",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}

        <button
          onClick={handleLogin}
          style={buttonStyle}
        >

          {

            loading

              ? (

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "center"
                  }}
                >

                  <Oval
                    height={28}
                    width={28}
                    color="black"
                    secondaryColor="black"
                  />

                </div>

              )

              : (

                "Login →"

              )

          }

        </button>

        {/* Divider */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "20px"
          }}
        >

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#475569"
            }}
          />

          <span
            style={{
              margin: "0 15px",
              color: "#94a3b8"
            }}
          >
            OR
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#475569"
            }}
          />

        </div>

        {/* Register */}

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            fontSize: "20px"
          }}
        >
          Don’t have an account?{" "}

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

      <ToastContainer />

    </div>

  );
}

const inputStyle = {

  width: "100%",

  padding: "18px",

  marginTop: "22px",

  borderRadius: "18px",

  border:
    "1px solid rgba(255,255,255,0.1)",

  fontSize: "18px",

  background:
    "rgba(30,41,59,0.9)",

  color: "white",

  outline: "none"

};

const buttonStyle = {

  width: "100%",

  padding: "18px",

  marginTop: "30px",

  background: "#ffb400",

  border: "none",

  borderRadius: "18px",

  fontWeight: "bold",

  fontSize: "24px",

  cursor: "pointer",

  color: "black",

  boxShadow:
    "0 0 20px rgba(255,180,0,0.5)"

};

export default Login;