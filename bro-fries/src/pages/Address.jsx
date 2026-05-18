import { useNavigate } from "react-router-dom";

function Address() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >

      <div
        style={{
          background: "#111827",
          padding: "50px",
          borderRadius: "30px",
          width: "450px",
          boxShadow: "0 0 30px rgba(255,180,0,0.2)"
        }}
      >

        <h1
          style={{
            color: "#ffb400",
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          🏠 Delivery Address
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="House Number"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Flat / Door Number"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Near Place"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="City"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <input
          type="text"
          placeholder="Pincode"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <button
          onClick={() => navigate("/payment")}
          style={{
            width: "100%",
            padding: "16px",
            background: "#ffb400",
            color: "black",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Proceed to Payment 💳
        </button>

      </div>

    </div>

  );
}

export default Address;