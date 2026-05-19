import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword
  ] = useState("");

  const handleReset = () => {

    const storedUser = JSON.parse(
      localStorage.getItem(
        "brofriesUser"
      )
    );

    if (
      storedUser?.email !== email
    ) {

      alert("Email not found");
      return;

    }

    if (
      newPassword !== confirmPassword
    ) {

      alert(
        "Passwords not matching"
      );

      return;

    }

    const updatedUser = {
      ...storedUser,
      password: newPassword
    };

    localStorage.setItem(
      "brofriesUser",
      JSON.stringify(updatedUser)
    );

    alert(
      "Password Updated"
    );

    navigate("/login");

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

        <h1
          style={{
            textAlign: "center",
            color: "#ffb400",
            fontSize: "42px"
          }}
        >
          Reset Password 🔒
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
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
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

        <button
          onClick={handleReset}
          style={buttonStyle}
        >
          Update Password
        </button>

      </div>

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

export default ForgotPassword;