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

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Auth from "./pages/Auth";

import CartProvider from "./Context/CartContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <CartProvider>

    <BrowserRouter>

      <Routes>

        {/* Auth Route */}

        <Route
          path="/"
          element={<Auth />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Other Pages */}

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/address"
          element={<Address />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

        {/* Login/Register */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Forgot Password */}

        <Route
          path="/forgotpassword"
          element={<ForgotPassword />}
        />

      </Routes>

    </BrowserRouter>

  </CartProvider>

);