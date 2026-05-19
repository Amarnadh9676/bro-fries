import { useContext } from "react";

import { useNavigate }
from "react-router-dom";

import { CartContext }
from "../Context/CartContext";

function Payment() {

  const navigate =
    useNavigate();

  const { cartItems } =
    useContext(CartContext);

  // Total Amount

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  // PhonePe Payment

  function phonepe() {

    const upiLink =
      `phonepe://pay?pa=9676532571-5@ybl&pn=BroFries&am=${total}&cu=INR`;

    window.location.href =
      upiLink;

  }

  // Google Pay

  function gpay() {

    const upiLink =
      `tez://upi/pay?pa=9676532571-5@ybl&pn=BroFries&am=${total}&cu=INR`;

    window.location.href =
      upiLink;

  }

  // Paytm

  function paytm() {

    const upiLink =
      `paytmmp://pay?pa=9676532571-5@ybl&pn=BroFries&am=${total}&cu=INR`;

    window.location.href =
      upiLink;

  }

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
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
          width: "420px",
          textAlign: "center",
          boxShadow:
            "0 0 30px rgba(255,180,0,0.2)"
        }}
      >

        <h1
          style={{
            color: "#ffb400",
            marginBottom: "20px"
          }}
        >
          💳 Payment Options
        </h1>

        {/* Total */}

        <h2
          style={{
            marginBottom: "35px",
            color: "#22c55e"
          }}
        >
          Total Amount:
          ₹{total}
        </h2>

        {/* PhonePe */}

        <button
          onClick={phonepe}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            background: "#5f259f",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          📱 Pay with PhonePe
        </button>

        {/* Google Pay */}

        <button
          onClick={gpay}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            background: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          💙 Pay with Google Pay
        </button>

        {/* Paytm */}

        <button
          onClick={paytm}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            background: "#00b9f1",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          💠 Pay with Paytm
        </button>

        {/* Payment Completed */}

        <button
          onClick={() => {

            alert(
              "Payment Successful 🎉"
            );

            navigate("/success");

          }}
          style={{
            width: "100%",
            padding: "16px",
            marginBottom: "20px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ✅ I Have Completed Payment
        </button>

        {/* COD */}

        <button
          onClick={() => {

            alert(
              "Order Placed Successfully 🎉"
            );

            navigate("/success");

          }}
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
          🚚 Cash on Delivery
        </button>

      </div>

    </div>

  );
}

export default Payment;