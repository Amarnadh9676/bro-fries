import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [captcha, setCaptcha] =
    useState("");

  const generatedCaptcha = "BRO123";

  const handleRegister = () => {

    if (
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords not matching");
      return;
    }

    if (captcha !== generatedCaptcha) {
      alert("Wrong captcha");
      return;
    }

    const user = {
      email,
      password
    };

    localStorage.setItem(
      "brofriesUser",
      JSON.stringify(user)
    );

    alert("Registered Successfully");

    navigate("/login");
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
          Register
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          style={inputStyle}
        />

        <h3>
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

        <button
          onClick={handleRegister}
          style={buttonStyle}
        >
          Register
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

export default Register;