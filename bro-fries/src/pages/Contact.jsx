import { motion } from "framer-motion";

function Contact() {

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
            fontSize: "70px"
          }}
        >
          Contact Us 📞
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "24px"
          }}
        >
          We would love to hear from you 💛
        </p>

      </motion.div>

      {/* CONTACT CARD */}

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
          maxWidth: "1000px",
          margin: "auto",
          boxShadow:
            "0 0 30px rgba(255,180,0,0.15)"
        }}
      >

        <h2
          style={{
            color: "#ffb400",
            fontSize: "40px",
            marginBottom: "25px"
          }}
        >
          Get In Touch 🚀
        </h2>

        <p style={textStyle}>
          📧 Email:
          madalaamar29@gmail.com
        </p>

        <p style={textStyle}>
          📱 Phone:
          +91 9676532571
        </p>

        <p style={textStyle}>
          📍 Location:
          Hyderabad, India
        </p>

        <p style={textStyle}>
          📸 Instagram:
          @brofries
        </p>

        {/* FEEDBACK FORM */}

        <div
          style={{
            marginTop: "40px"
          }}
        >

          <input
            type="text"
            placeholder="Enter Your Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            style={inputStyle}
          />

          <textarea
            placeholder="Write Your Message..."
            rows="6"
            style={textareaStyle}
          />

          <button
            style={buttonStyle}
          >
            Send Message 🚀
          </button>

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

const textStyle = {

  color: "#cbd5e1",

  fontSize: "22px",

  marginBottom: "15px"

};

const inputStyle = {

  width: "100%",

  padding: "15px",

  marginBottom: "20px",

  borderRadius: "12px",

  border: "none",

  background: "#111827",

  color: "white",

  fontSize: "18px",

  outline: "none"

};

const textareaStyle = {

  width: "100%",

  padding: "15px",

  borderRadius: "12px",

  border: "none",

  background: "#111827",

  color: "white",

  fontSize: "18px",

  outline: "none",

  marginBottom: "20px"

};

const buttonStyle = {

  background: "#ffb400",

  color: "black",

  border: "none",

  padding: "15px 35px",

  borderRadius: "12px",

  fontWeight: "bold",

  fontSize: "18px",

  cursor: "pointer"

};

export default Contact;