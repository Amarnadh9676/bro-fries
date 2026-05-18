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
              objectFit: "cover",
              borderRadius: "20px"
            }}
          />

          <h1
            style={{
              color: "#ffb400",
              fontSize: "40px",
              margin: "0"
            }}
          >
            Bro Fries
          </h1>

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "10px"
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
          borderRadius: "30px",
          boxShadow: "0 0 30px rgba(255,180,0,0.15)"
        }}
      >

        <div
          style={{
            flex: "1"
          }}
        >

          <h1
            style={{
              fontSize: "75px",
              lineHeight: "90px",
              marginBottom: "20px"
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
              color: "#cbd5e1",
              marginBottom: "30px",
              maxWidth: "600px"
            }}
          >
            Crispy fries, juicy burgers and refreshing drinks
            made with love just for you 🍔🍟🥤
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
              marginRight: "20px"
            }}
          >
            🍟 Order Now
          </button>

          <button
            onClick={() => navigate("/cart")}
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid #ffb400",
              padding: "15px 35px",
              borderRadius: "14px",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            🛒 View Cart
          </button>

        </div>

        <div>

          <img
            src={burger}
            alt="burger"
            style={{
              width: "500px",
              maxWidth: "100%",
              borderRadius: "30px",
              boxShadow: "0 0 40px rgba(255,180,0,0.3)"
            }}
          />

        </div>

      </div>

      {/* Stats Cards */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "40px"
        }}
      >

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "20px",
            width: "260px",
            textAlign: "center",
            boxShadow: "0 0 20px rgba(255,180,0,0.2)"
          }}
        >

          <h1
            style={{
              color: "#ffb400",
              fontSize: "50px"
            }}
          >
            0
          </h1>

          <h2>Total Orders</h2>

        </div>

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "20px",
            width: "260px",
            textAlign: "center",
            boxShadow: "0 0 20px rgba(0,255,100,0.2)"
          }}
        >

          <h1
            style={{
              color: "#00ff66",
              fontSize: "50px"
            }}
          >
            ₹0
          </h1>

          <h2>Total Revenue</h2>

        </div>

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "20px",
            width: "260px",
            textAlign: "center",
            boxShadow: "0 0 20px rgba(0,150,255,0.2)"
          }}
        >

          <h1
            style={{
              color: "#00bfff",
              fontSize: "50px"
            }}
          >
            0
          </h1>

          <h2>Pending Orders</h2>

        </div>

        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "20px",
            width: "260px",
            textAlign: "center",
            boxShadow: "0 0 20px rgba(255,0,100,0.2)"
          }}
        >

          <h1
            style={{
              color: "#ff4da6",
              fontSize: "50px"
            }}
          >
            0
          </h1>

          <h2>Delivered Orders</h2>

        </div>

      </div>

      {/* Footer */}

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#94a3b8",
          fontSize: "18px"
        }}
      >

        © 2026 Bro Fries. Developed by Madala Amarnadh 💛

      </div>

    </div>

  );
}

export default Dashboard;