import { useContext } from "react";

import { CartContext } from "../Context/CartContext";

function Cart() {

  const {
    cartItems,
    addToCart,
    removeFromCart
  } = useContext(CartContext);

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
            marginBottom: "20px"
          }}
        >

          <h2>{item.name}</h2>

          <h3>
            Quantity: {item.quantity}
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

    </div>

  );
}

export default Cart;