import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

function Cart() {

  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useContext(CartContext);

  // Total Price Calculation

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

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

        <h1
          style={{
            color: "#ffb400"
          }}
        >
          Total: ₹{total}
        </h1>

      </div>

    </div>

  );
}

export default Cart;