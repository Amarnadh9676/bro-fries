import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Menu from "./Menu";

import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

import CartProvider from "./Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <CartProvider>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/address" element={<Address />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/success" element={<Success />} />

      </Routes>

    </BrowserRouter>

  </CartProvider>

);