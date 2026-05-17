import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {

    const found = cartItems.find(
      (cart) => cart.name === item.name
    );

    if (found) {

      const updatedCart = cartItems.map((cart) => {

        if (cart.name === item.name) {

          return {
            ...cart,
            quantity: cart.quantity + 1
          };

        }

        return cart;

      });

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1
        }
      ]);

    }

  };

  const removeFromCart = (itemName) => {

    const updatedCart = cartItems
      .map((cart) => {

        if (cart.name === itemName) {

          return {
            ...cart,
            quantity: cart.quantity - 1
          };

        }

        return cart;

      })
      .filter((cart) => cart.quantity > 0);

    setCartItems(updatedCart);

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;