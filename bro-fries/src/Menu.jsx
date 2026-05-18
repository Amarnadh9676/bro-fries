import "./App.css";

import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

import burger from "./images/burger.jpg";
import cheese from "./images/cheese.jpg";
import drink from "./images/drink.jpg";
import french from "./images/french.jpg";
import mayo from "./images/mayo.jpg";
import peri from "./images/peri.jpg";

function Menu() {

  const { addToCart } = useContext(CartContext);

  const foods = [
    {
      name: "Veg Burger",
      price: 119,
      image: burger
    },
    {
      name: "Cheese Fries",
      price: 149,
      image: cheese
    },
    {
      name: "Cool Drinks",
      price: 49,
      image: drink
    },
    {
      name: "French Fries",
      price: 99,
      image: french
    },
    {
      name: "Mayo Fries",
      price: 159,
      image: mayo
    },
    {
      name: "Peri Peri Fries",
      price: 129,
      image: peri
    }
  ];

  return (

    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        padding: "40px",
        color: "white",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#ffb400",
          fontSize: "60px",
          marginBottom: "50px"
        }}
      >
        🍟 Bro Fries Menu
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >

        {foods.map((food) => (

          <div
            key={food.name}
            style={{
              background: "#111827",
              borderRadius: "25px",
              overflow: "hidden",
              width: "320px",
              boxShadow: "0 0 25px rgba(255,180,0,0.15)",
              transition: "0.3s"
            }}
          >

            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover"
              }}
            />

            <div
              style={{
                padding: "25px"
              }}
            >

              <h2
                style={{
                  fontSize: "30px",
                  marginBottom: "10px"
                }}
              >
                {food.name}
              </h2>

              <h3
                style={{
                  color: "#ffb400",
                  marginBottom: "20px"
                }}
              >
                ₹{food.price}
              </h3>

              <button
                onClick={() => addToCart(food)}
                style={{
                  background: "#ffb400",
                  color: "black",
                  border: "none",
                  padding: "14px",
                  width: "100%",
                  borderRadius: "14px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                🛒 Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Menu;