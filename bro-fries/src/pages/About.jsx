import { motion } from "framer-motion";

function About() {

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      {/* HEADER */}

      <motion.div

        initial={{
          opacity: 0,
          y: -50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        style={{
          textAlign: "center",
          marginBottom: "50px"
        }}
      >

        <h1
          style={{
            color: "#ffb400",
            fontSize: "70px",
            marginBottom: "10px"
          }}
        >
          About Bro Fries 🍟
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "24px"
          }}
        >
          Fast • Crispy • Delicious 🔥
        </p>

      </motion.div>

      {/* CONTENT */}

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
          background: "#0f172a",
          padding: "40px",
          borderRadius: "30px",
          boxShadow:
            "0 0 30px rgba(255,180,0,0.15)",
          maxWidth: "1200px",
          margin: "auto"
        }}
      >

        <h2
          style={{
            color: "#ffb400",
            fontSize: "40px",
            marginBottom: "20px"
          }}
        >
          Our Story 🚀
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "22px",
            lineHeight: "40px"
          }}
        >
          Bro Fries is a modern fast food
          delivery platform built with
          React and Supabase.

          We deliver crispy fries,
          juicy burgers and refreshing
          drinks with lightning-fast
          delivery service 🍔🍟🥤

          Our mission is to provide
          delicious food with premium
          user experience and modern
          technology.
        </p>

        {/* FEATURES */}

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "50px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >

          <div style={cardStyle}>
            ⚡ Fast Delivery
          </div>

          <div style={cardStyle}>
            🍔 Premium Burgers
          </div>

          <div style={cardStyle}>
            🍟 Crispy Fries
          </div>

          <div style={cardStyle}>
            🥤 Cool Drinks
          </div>

        </div>

      </motion.div>

      {/* FOOTER */}

      <motion.div

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}

        transition={{
          duration: 1
        }}

        style={{
          marginTop: "60px",
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
            fontSize: "24px"
          }}
        >
          Designed & Developed ❤️
          By Madala Amarnadh
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            marginTop: "10px"
          }}
        >
          © 2026 Bro Fries |
          All Rights Reserved
        </p>

      </motion.div>

    </div>

  );
}

const cardStyle = {

  background: "#111827",

  padding: "25px 35px",

  borderRadius: "20px",

  fontSize: "22px",

  fontWeight: "bold",

  color: "#ffb400",

  boxShadow:
    "0 0 20px rgba(255,180,0,0.15)"

};

export default About;