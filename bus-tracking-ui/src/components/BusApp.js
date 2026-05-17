import React, { useState } from "react";
import Login from "./Login";
import BusPage from "./BusPage";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? 
        <BusPage /> : 
        <Login setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  );
}

export default App;