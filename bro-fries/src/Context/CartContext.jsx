import {
  createContext,
  useState,
  useEffect
} from "react";

export const CartContext =
  createContext();

function CartProvider({
  children
}) {

  // LOCAL STORAGE CART

  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem(
          "cart"
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];

    });

  // SAVE CART TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // ADD TO CART

  const addToCart = (item) => {

    const found =
      cartItems.find(
        (cart) =>
          cart.name === item.name
      );

    if (found) {

      const updatedCart =
        cartItems.map((cart) => {

          if (
            cart.name === item.name
          ) {

            return {

              ...cart,

              quantity:
                cart.quantity + 1

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

  // REMOVE FROM CART

  const removeFromCart = (
    itemName
  ) => {

    const updatedCart =
      cartItems

        .map((cart) => {

          if (
            cart.name === itemName
          ) {

            return {

              ...cart,

              quantity:
                cart.quantity - 1

            };

          }

          return cart;

        })

        .filter(
          (cart) =>
            cart.quantity > 0
        );

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