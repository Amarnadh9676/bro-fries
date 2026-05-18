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

    <div className="app">

      <h1 className="title">
        🍟 Bro Fries Menu
      </h1>

      <div className="container">

        {foods.map((food) => (

          <div className="card" key={food.name}>

            <img
              src={food.image}
              alt={food.name}
            />

            <h2>{food.name}</h2>

            <p>₹{food.price}</p>

            <button
              onClick={() => addToCart(food)}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Menu;