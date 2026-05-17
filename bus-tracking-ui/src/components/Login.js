import React, { useState, useEffect } from "react";
import BusPage from "./BusPage";
import "../App.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGH123456789";
    let cap = "";
    for (let i = 0; i < 5; i++) {
      cap += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(cap);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    if (username === "amar" && password === "96765") {
      if (userCaptcha === captcha) {
        setIsLoggedIn(true);
      } else {
        alert("Captcha incorrect ❌");
        generateCaptcha();
      }
    } else {
      alert("Invalid credentials ❌");
    }
  };

  if (isLoggedIn) return <BusPage />;

  return (
    <div className="center-page">
      <div className="page-card" style={{ maxWidth: "350px" }}>
        <h2>🔐 Login</h2>

        <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <div className="captcha-box">
          <span>{captcha}</span>
          <button onClick={generateCaptcha}>↻</button>
        </div>

        <input
          placeholder="Enter CAPTCHA"
          value={userCaptcha}
          onChange={(e)=>setUserCaptcha(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;