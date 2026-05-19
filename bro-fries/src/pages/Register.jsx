import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import logo from "../images/logo.png";

import { supabase } from "../supabase";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword
  ] = useState("");

  const [captcha, setCaptcha] =
    useState("");

  const generatedCaptcha =
    "BRO123";

  const handleRegister = async () => {

    if (
      !email ||
      !password ||
      !confirmPassword
    ) {

      alert("Fill all fields");
      return;

    }

    if (
      password !== confirmPassword
    ) {

      alert(
        "Passwords not matching"
      );

      return;

    }

    if (
      captcha !== generatedCaptcha
    ) {

      alert("Wrong captcha");
      return;

    }

    // SUPABASE SIGNUP

    const { error } =
      await supabase.auth.signUp({

        email,
        password,

      });

    if (error) {

      alert(error.message);

    } else {

      alert(
        "Registered Successfully"
      );

      navigate("/login");

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
            Create your account
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          style={inputStyle}
        />

        {/* Captcha */}

        <h3
          style={{
            marginTop: "20px"
          }}
        >
          Captcha:
          <span
            style={{
              color: "#ffb400"
            }}
          >
            {" "}
            {generatedCaptcha}
          </span>
        </h3>

        <input
          type="text"
          placeholder="Enter Captcha"
          value={captcha}
          onChange={(e) =>
            setCaptcha(e.target.value)
          }
          style={inputStyle}
        />

        {/* Button */}

        <button
          onClick={handleRegister}
          style={buttonStyle}
        >
          Register
        </button>

        {/* Login Link */}

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#cbd5e1"
          }}
        >
          Already have an account?{" "}

          <Link
            to="/login"
            style={{
              color: "#ffb400",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Login
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

export default Register;