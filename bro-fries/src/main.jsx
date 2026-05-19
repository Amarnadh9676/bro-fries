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

import Orders from "./pages/Orders";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Auth from "./pages/Auth";

import CartProvider from "./Context/CartContext";

// IMPORT PROTECTED ROUTE

import ProtectedRoute from "./components/ProtectedRoute";

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

        {/* Protected Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Menu */}

        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        {/* Protected Cart */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Protected Address */}

        <Route
          path="/address"
          element={
            <ProtectedRoute>
              <Address />
            </ProtectedRoute>
          }
        />

        {/* Protected Payment */}

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        {/* Protected Orders */}

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* Protected Success */}

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
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