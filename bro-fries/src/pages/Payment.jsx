function Payment() {

  function phonepe() {
    window.location.href = "https://www.phonepe.com/";
  }

  function gpay() {
    window.location.href = "https://pay.google.com/";
  }

  function paytm() {
    window.location.href = "https://paytm.com/";
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
          width: "400px",
          textAlign: "center",
          boxShadow: "0 0 30px rgba(255,180,0,0.2)"
        }}
      >

        <h1
          style={{
            color: "#ffb400",
            marginBottom: "40px"
          }}
        >
          💳 Payment Options
        </h1>

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
          PhonePe
        </button>

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
          Google Pay
        </button>

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
          Paytm
        </button>

        <button
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
          Cash on Delivery
        </button>

      </div>

    </div>

  );
}

export default Payment;