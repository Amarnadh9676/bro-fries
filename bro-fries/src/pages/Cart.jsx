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

          <h3
            style={{
              color: "#ffb400"
            }}
          >
            Item Total:
            ₹{item.price * item.quantity}
          </h3>

          <button
            onClick={() => addToCart(item)}
          >
            Add
          </button>

          <button
            onClick={() =>
              removeFromCart(item.name)
            }
            style={{
              marginLeft: "10px"
            }}
          >
            Remove
          </button>

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