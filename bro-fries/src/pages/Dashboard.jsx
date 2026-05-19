import { useNavigate } from "react-router-dom";

import {
  useContext,
  useEffect,
  useState
} from "react";

import { motion } from "framer-motion";

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

  const { cartItems } =
    useContext(CartContext);

  // USER NAME STATE

  const [userName, setUserName] =
    useState("");

  // GET USER DETAILS

  useEffect(() => {

    const getUser = async () => {

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (user) {

        // GET NAME FROM LOCAL STORAGE

        const savedName =
          localStorage.getItem("userName");

        setUserName(

          savedName ||

          user.user_metadata?.name ||

          user.email?.split("@")[0] ||

          "Bro"

        );

      }

    };

    getUser();

  }, []);

  // LOGOUT

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

        {/* NAVBAR */}

        <motion.div

          whileHover={{
            scale: 1.01
          }}

          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            background: "#0f172a",
            padding: "20px 30px",
            borderRadius: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
            boxShadow:
              "0 0 25px rgba(255,180,0,0.15)"
          }}
        >

          {/* LOGO */}

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
                  margin: 0
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

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >

            {/* DYNAMIC USER NAME */}

            <h3
              style={{
                color: "#ffb400",
                fontSize: "28px",
                fontWeight: "bold"
              }}
            >
              👋 Welcome {userName}
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

        {/* HERO SECTION */}

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
                boxShadow:
                  "0 0 20px rgba(255,180,0,0.5)"
              }}
            >
              🍟 Order Now
            </motion.button>

          </div>

          {/* HERO IMAGE */}

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

        {/* FOOTER */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

          style={{
            marginTop: "50px",
            textAlign: "center",
            padding: "20px",
            background: "#0f172a",
            borderRadius: "20px",
            boxShadow:
              "0 0 20px rgba(255,180,0,0.1)"
          }}
        >
          <h3
            style={{
              color: "#ffb400",
              fontSize: "22px",
              margin: 0,
              letterSpacing: "1px"
            }}
          >
            Designed & Developed ❤️ By Madala Amarnadh
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "10px",
              fontSize: "15px"
            }}
          >
            © 2026 Bro Fries | All Rights Reserved
          </p>
        </motion.div>

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

  fontSize: "16px"

};

const cartBtn = {

  background: "#111827",

  color: "white",

  border: "2px solid #ffb400",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px"

};

const addressBtn = {

  background: "#2196f3",

  color: "white",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px"

};

const paymentBtn = {

  background: "purple",

  color: "white",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px"

};

const logoutBtn = {

  background: "red",

  color: "white",

  border: "none",

  padding: "12px 25px",

  borderRadius: "12px",

  cursor: "pointer",

  fontSize: "16px"

};

export default Dashboard;