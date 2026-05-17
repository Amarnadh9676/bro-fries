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
    <div style={{ textAlign: "center" }}>

      <h1>💳 Payment Page</h1>

      <button onClick={phonepe}>
        PhonePe
      </button>

      <br /><br />

      <button onClick={gpay}>
        Google Pay
      </button>

      <br /><br />

      <button onClick={paytm}>
        Paytm
      </button>

      <br /><br />

      <button>
        Cash on Delivery
      </button>

    </div>
  );
}

export default Payment;