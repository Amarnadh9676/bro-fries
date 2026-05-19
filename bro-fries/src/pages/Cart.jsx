import { useContext, useState } from "react";

import { CartContext } from "../Context/CartContext";

function Cart() {

  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useContext(CartContext);

  // Coupon States

  const [coupon, setCoupon] =
    useState("");

  const [discount, setDiscount] =
    useState(0);

  // Total Price

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // Final Price

  const finalTotal =
    total - discount;

  // Apply Coupon

  const applyCoupon = () => {

    if (coupon === "BRO50") {

      setDiscount(total * 0.1);

      alert(
        "Coupon Applied 🎉"
      );

    } else {

      alert(
        "Invalid Coupon ❌"
      );

    }

  };

  return (

    <div
      style={{
        padding: "30px",
        background: "#08122e",
        color: "white",
        minHeight: "100vh"
      }}
    >

      <h1>🛒 Cart</h1>

      {cartItems.map((item) => (

        <div
          key={item.name}
          style={{
            marginBottom: "20px",
            background: "#111827",
            padding: "20px",
            borderRadius: "15px"
          }}
        >

          <h2>{item.name}</h2>

          <h3>
            Price: ₹{item.price}
          </h3>

          <h3>
            Quantity: {item.quantity}
          </h3>

          {/* Quantity Buttons */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginTop: "15px"
            }}
          >

            <button
              onClick={() =>
                removeFromCart(item.name)
              }
              style={{
                padding: "8px 15px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
              }}
            >
              ➖
            </button>

            <h2>{item.quantity}</h2>

            <button
              onClick={() => addToCart(item)}
              style={{
                padding: "8px 15px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
              }}
            >
              ➕
            </button>

          </div>

          <h3
            style={{
              color: "#ffb400",
              marginTop: "20px"
            }}
          >
            Item Total:
            ₹{item.price * item.quantity}
          </h3>

        </div>

      ))}

      {/* Coupon Section */}

      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          padding: "25px",
          borderRadius: "20px"
        }}
      >

        <h2
          style={{
            color: "#ffb400"
          }}
        >
          🎟 Apply Coupon
        </h2>

        <input
          type="text"
          placeholder="Enter Coupon"
          value={coupon}
          onChange={(e) =>
            setCoupon(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            borderRadius: "12px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <button
          onClick={applyCoupon}
          style={{
            marginTop: "20px",
            background: "#ffb400",
            color: "black",
            border: "none",
            padding: "14px 25px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Apply Coupon
        </button>

      </div>

      {/* Final Total */}

      <div
        style={{
          marginTop: "40px",
          background: "#111827",
          padding: "25px",
          borderRadius: "20px",
          textAlign: "center"
        }}
      >

        <h2>
          Original Total:
          ₹{total}
        </h2>

        <h2
          style={{
            color: "#22c55e"
          }}
        >
          Discount:
          ₹{discount}
        </h2>

        <h1
          style={{
            color: "#ffb400"
          }}
        >
          Final Total:
          ₹{finalTotal}
        </h1>

      </div>

    </div>

  );
}

export default Cart;