import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        backgroundColor: "#08122e",
        minHeight: "100vh",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>👨‍💼 Admin Dashboard</h1>

      <h2>Total Orders: 120</h2>

      <h2>Total Revenue: ₹25,000</h2>

      <h2>Pending Orders: 15</h2>

      <h2>Delivered Orders: 105</h2>

      <br />

      <button
        onClick={() => navigate("/menu")}
        style={{
          padding: "15px",
          fontSize: "18px",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        🍟 Open Menu
      </button>

      <br /><br />

      <button
        onClick={() => navigate("/cart")}
        style={{
          padding: "15px",
          fontSize: "18px",
          backgroundColor: "green",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          color: "white"
        }}
      >
        🛒 View Cart
      </button>

      <br /><br />

      <button
        onClick={() => navigate("/address")}
        style={{
          padding: "15px",
          fontSize: "18px",
          backgroundColor: "#2196f3",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          color: "white"
        }}
      >
        🏠 Address
      </button>

      <br /><br />

      <button
        onClick={() => navigate("/payment")}
        style={{
          padding: "15px",
          fontSize: "18px",
          backgroundColor: "purple",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          color: "white"
        }}
      >
        💳 Payment
      </button>

    </div>

  );
}

export default Dashboard;