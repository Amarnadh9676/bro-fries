import { useNavigate } from "react-router-dom";

import {
  useContext,
  useEffect,
  useState
} from "react";

import { motion }
from "framer-motion";

import { CartContext } from "../Context/CartContext";

import { supabase } from "../supabase";

import {
  ToastContainer,
  toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import logo from "../images/logo.png";

import burger from "../images/burger.png";

function Dashboard() {

  const navigate = useNavigate();

  // USER NAME STATE

  const [userName, setUserName] =
    useState("");

  // Cart Context

  const { cartItems } =
    useContext(CartContext);

  // GET USER NAME

  useEffect(() => {

    const getUser = async () => {

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (user) {

        setUserName(
          user.user_metadata.name
        );

      }

    };

    getUser();

  }, []);

  // Logout Function

  const handleLogout = async () => {

    await supabase.auth.signOut();

    toast.success("Logged Out");

    navigate("/login");

  };

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

      {/* Main Container */}

      <motion.div

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        style={{
          maxWidth: "1400px",
          margin: "auto"
        }}
      >

        {/* Navbar */}

        <motion.div

          whileHover={{
            scale: 1.01
          }}

          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0f172a",
            padding: "15px 30px",
            borderRadius: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
            boxShadow:
              "0 0 20px rgba(255,180,0,0.15)"
          }}
        >

          {/* Logo Section */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}
          >

            <motion.img
              whileHover={{
                rotate: 5,
                scale: 1.05
              }}
              src={logo}
              alt="logo"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
                border:
                  "3px solid #ffb400",
                boxShadow:
                  "0 0 20px rgba(255,180,0,0.5)"
              }}
            />

            <div>

              <h1
                style={{
                  color: "#ffb400",
                  fontSize: "42px",
                  margin: "0"
                }}
              >
                Bro Fries 🔥
              </h1>

              <p
                style={{
                  color: "#cbd5e1",
                  marginTop: "5px"
                }}
              >
                Fastest Food Delivery 🍟
              </p>

            </div>

          </div>

          {/* Navbar Buttons */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >

            {/* Dynamic Welcome */}

            <h3
              style={{
                color: "#ffb400"
              }}
            >
              Welcome {userName} 👋
            </h3>

            <motion.button
              whileHover={{
                scale: 1.08
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() =>
                navigate("/menu")
              }
              style={menuBtn}
            >
              🍟 Menu
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() =>
                navigate("/cart")
              }
              style={cartBtn}
            >
              🛒 Cart (
              {cartItems.length}
              )
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() =>
                navigate("/address")
              }
              style={addressBtn}
            >
              🏠 Address
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() =>
                navigate("/payment")
              }
              style={paymentBtn}
            >
              💳 Payment
            </motion.button>

            {/* Logout */}

            <motion.button
              whileHover={{
                scale: 1.08
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={handleLogout}
              style={logoutBtn}
            >
              🚪 Logout
            </motion.button>

          </div>

        </motion.div>

        {/* Hero Section */}

        <motion.div

          initial={{
            opacity: 0,
            x: -100
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 1
          }}

          style={{
            display: "flex",
            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: "40px",

            background: "#0f172a",

            padding: "50px",

            borderRadius: "30px",

            boxShadow:
              "0 0 30px rgba(255,180,0,0.1)"
          }}
        >

          <div>

            <h1
              style={{
                fontSize: "70px",
                lineHeight: "90px",
                marginBottom: "20px"
              }}
            >
              HOT & CRISPY
              <br />

              <span
                style={{
                  color: "#ffb400"
                }}
              >
                FAST FOOD 🔥
              </span>

            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#cbd5e1",
                maxWidth: "600px"
              }}
            >
              Delicious burgers,
              crispy fries and
              refreshing drinks
              delivered instantly
              to your doorstep
              🍔🍟🥤
            </p>

            <motion.button

              whileHover={{
                scale: 1.08
              }}

              whileTap={{
                scale: 0.95
              }}

              onClick={() =>
                navigate("/menu")
              }

              style={{
                background: "#ffb400",
                color: "black",
                border: "none",
                padding: "15px 35px",
                borderRadius: "14px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "25px",
                transition: "0.3s",
                boxShadow:
                  "0 0 20px rgba(255,180,0,0.5)"
              }}
            >
              🍟 Order Now
            </motion.button>

          </div>

          {/* Hero Image */}

          <motion.img

            animate={{
              y: [0, -15, 0]
            }}

            transition={{
              duration: 3,
              repeat: Infinity
            }}

            src={burger}

            alt="burger"

            style={{
              width: "500px",
              borderRadius: "30px",
              maxWidth: "100%",
              boxShadow:
                "0 0 40px rgba(255,180,0,0.3)"
            }}
          />

        </motion.div>

        {/* Offer Banner */}

        <motion.div

          animate={{
            scale: [1, 1.02, 1]
          }}

          transition={{
            duration: 2,
            repeat: Infinity
          }}

          style={{
            marginTop: "40px",
            background:
              "linear-gradient(90deg,#ffb400,#ff5722)",

            padding: "20px",

            borderRadius: "20px",

            textAlign: "center",

            color: "black",

            fontWeight: "bold",

            fontSize: "24px",

            boxShadow:
              "0 0 20px rgba(255,180,0,0.3)"
          }}
        >
          🔥 Flat 50% OFF on
          Burgers This Weekend 🍔
        </motion.div>

        {/* Footer */}

        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            padding: "30px",
            borderTop:
              "1px solid #334155"
          }}
        >

          <h2
            style={{
              color: "#ffb400",
              letterSpacing: "2px",
              fontSize: "22px"
            }}
          >
            🚀 Developed By
          </h2>

          <h1
            style={{
              background:
                "linear-gradient(90deg,#ffb400,#ff5722,#ff00c8)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",

              fontSize: "40px",

              marginTop: "10px"
            }}
          >
            Madala Amarnadh
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "10px",
              fontSize: "16px"
            }}
          >
            Building modern food
            experiences with
            React ⚡
          </p>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "10px"
            }}
          >
            📧
            brofries@gmail.com
          </p>

        </div>

      </motion.div>

      <ToastContainer />

    </div>

  );
}

// BUTTON STYLES

const menuBtn = {

  background: "#ffb400",

  color: "black",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontWeight: "bold",

  fontSize: "16px",

  transition: "0.3s",

  boxShadow:
    "0 0 20px rgba(255,180,0,0.3)"

};

const cartBtn = {

  background: "#111827",

  color: "white",

  border: "2px solid #ffb400",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px",

  transition: "0.3s"

};

const addressBtn = {

  background: "#2196f3",

  color: "white",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px",

  transition: "0.3s"

};

const paymentBtn = {

  background: "purple",

  color: "white",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px",

  transition: "0.3s"

};

const logoutBtn = {

  background: "red",

  color: "white",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px",

  transition: "0.3s"

};

export default Dashboard;