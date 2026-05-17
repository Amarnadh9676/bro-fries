import { useNavigate } from "react-router-dom";

function Address() {

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>

      <h1>🏠 Address Page</h1>

      <input type="text" placeholder="Full Name" />
      <br /><br />

      <input type="text" placeholder="Phone Number" />
      <br /><br />

      <input type="text" placeholder="House Number" />
      <br /><br />

      <input type="text" placeholder="Flat / Door Number" />
      <br /><br />

      <input type="text" placeholder="Near Place" />
      <br /><br />

      <input type="text" placeholder="City" />
      <br /><br />

      <input type="text" placeholder="Pincode" />
      <br /><br />

      <button
        onClick={() => navigate("/payment")}
      >
        Proceed to Payment
      </button>

    </div>
  );
}

export default Address;