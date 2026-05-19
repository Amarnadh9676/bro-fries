import "./App.css";

import { useContext, useState } from "react";

import { motion } from "framer-motion";

import { CartContext } from "./Context/CartContext";

import burger from "./images/burger.jpg";
import cheese from "./images/cheese.jpg";
import drink from "./images/drink.jpg";
import french from "./images/french.jpg";
import mayo from "./images/mayo.jpg";
import peri from "./images/peri.jpg";

function Menu() {

  const { addToCart } =
    useContext(CartContext);

  // Search State

  const [search, setSearch] =
    useState("");

  // Category State

  const [category, setCategory] =
    useState("All");

  const foods = [

    {
      name: "Veg Burger",
      price: 119,
      image: burger,
      rating: "4.8 ⭐"
    },

    {
      name: "Cheese Fries",
      price: 149,
      image: cheese,
      rating: "4.7 ⭐"
    },

    {
      name: "Cool Drinks",
      price: 49,
      image: drink,
      rating: "4.5 ⭐"
    },

    {
      name: "French Fries",
      price: 99,
      image: french,
      rating: "4.9 ⭐"
    },

    {
      name: "Mayo Fries",
      price: 159,
      image: mayo,
      rating: "4.6 ⭐"
    },

    {
      name: "Peri Peri Fries",
      price: 129,
      image: peri,
      rating: "5.0 ⭐"
    }

  ];

  // Search + Category Filter

  const filteredFoods =
    foods.filter((food) => {

      const matchesSearch =

        food.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =

        category === "All"

          ? true

          : category === "Burger"
          ? food.name.includes(
              "Burger"
            )

          : category === "Fries"
          ? food.name.includes(
              "Fries"
            )

          : category === "Drinks"
          ? food.name.includes(
              "Drinks"
            )

          : true;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

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

      {/* Heading */}

      <motion.h1

        initial={{
          opacity: 0,
          y: -50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        style={{
          textAlign: "center",
          color: "#ffb400",
          fontSize: "60px",
          marginBottom: "30px"
        }}
      >
        🍟 Bro Fries Menu
      </motion.h1>

      {/* Search Bar */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "15px",
            width: "350px",
            borderRadius: "14px",
            border: "none",
            fontSize: "18px",
            background: "#111827",
            color: "white",
            outline: "none",
            boxShadow:
              "0 0 15px rgba(255,180,0,0.2)"
          }}
        />

      </div>

      {/* Category Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >

        {[
          "All",
          "Burger",
          "Fries",
          "Drinks"
        ].map((item) => (

          <motion.button

            whileHover={{
              scale: 1.08
            }}

            whileTap={{
              scale: 0.95
            }}

            key={item}

            onClick={() =>
              setCategory(item)
            }

            style={{
              background:
                category === item
                  ? "#ffb400"
                  : "#111827",

              color:
                category === item
                  ? "black"
                  : "white",

              border:
                "2px solid #ffb400",

              padding:
                "12px 24px",

              borderRadius: "14px",

              fontWeight: "bold",

              cursor: "pointer",

              fontSize: "16px"
            }}
          >
            {item}
          </motion.button>

        ))}

      </div>

      {/* Food Cards */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >

        {filteredFoods.map((food) => (

          <motion.div

            key={food.name}

            whileHover={{
              scale: 1.05,
              y: -10
            }}

            transition={{
              duration: 0.3
            }}

            style={{
              background: "#111827",
              borderRadius: "25px",
              overflow: "hidden",
              width: "320px",
              boxShadow:
                "0 0 25px rgba(255,180,0,0.15)"
            }}
          >

            {/* Food Image */}

            <motion.img

              whileHover={{
                scale: 1.1
              }}

              transition={{
                duration: 0.4
              }}

              src={food.image}

              alt={food.name}

              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover"
              }}
            />

            {/* Card Content */}

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

              {/* Rating */}

              <p
                style={{
                  color: "#ffb400",
                  marginBottom: "10px",
                  fontSize: "18px"
                }}
              >
                {food.rating}
              </p>

              {/* Price */}

              <h3
                style={{
                  color: "#22c55e",
                  marginBottom: "20px",
                  fontSize: "28px"
                }}
              >
                ₹{food.price}
              </h3>

              {/* Add To Cart */}

              <motion.button

                whileHover={{
                  scale: 1.05
                }}

                whileTap={{
                  scale: 0.9
                }}

                onClick={() =>
                  addToCart(food)
                }

                style={{
                  background: "#ffb400",
                  color: "black",
                  border: "none",
                  padding: "14px",
                  width: "100%",
                  borderRadius: "14px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow:
                    "0 0 15px rgba(255,180,0,0.3)"
                }}
              >
                🛒 Add To Cart
              </motion.button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );
}

export default Menu;