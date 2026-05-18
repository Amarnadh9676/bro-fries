import { useNavigate } from "react-router-dom";

import logo from "../images/logo.png";
import burger from "../images/burger.jpg";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#0f172a",
          padding: "15px 30px",
          borderRadius: "20px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >

          <img
            src={logo}
            alt="logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              objectFit: "cover"
            }}
          />

          <h1
            style={{
              color: "#ffb400",
              fontSize: "40px",
              margin: "0"
            }}
          >
            Bro Fries 🔥
          </h1>

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => navigate("/menu")}
            style={{
              background: "#ffb400",
              color: "black",
              border: "none",
              padding: "12px 25px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            🍟 Menu
          </button>

          <button
            onClick={() => navigate("/cart")}
            style={{
              background: "#111827",
              color: "white",
              border: "2px solid #ffb400",
              padding: "12px 25px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            🛒 Cart
          </button>

          <button
            onClick={() => navigate("/address")}
            style={{
              background: "#2196f3",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            🏠 Address
          </button>

          <button
            onClick={() => navigate("/payment")}
            style={{
              background: "purple",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            💳 Payment
          </button>

        </div>

      </div>

      {/* Hero Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "30px"
        }}
      >

        <div>

          <h1
            style={{
              fontSize: "70px",
              lineHeight: "90px"
            }}
          >
            GOOD FOOD
            <br />

            <span
              style={{
                color: "#ffb400"
              }}
            >
              GOOD VIBES
            </span>

          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1"
            }}
          >
            Crispy fries, juicy burgers and refreshing drinks 🍔🍟🥤
          </p>

          <button
            onClick={() => navigate("/menu")}
            style={{
              background: "#ffb400",
              color: "black",
              border: "none",
              padding: "15px 35px",
              borderRadius: "14px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "20px"
            }}
          >
            🍟 Order Now
          </button>

        </div>

        <img
          src={burger}
          alt="burger"
          style={{
            width: "450px",
            borderRadius: "30px",
            maxWidth: "100%"
          }}
        />

      </div>

    </div>

  );
}

export default Dashboard;