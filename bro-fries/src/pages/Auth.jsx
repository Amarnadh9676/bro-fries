import { Navigate } from "react-router-dom";

function Auth() {

  const storedUser = JSON.parse(
    localStorage.getItem(
      "brofriesUser"
    )
  );

  const isLoggedIn =
    localStorage.getItem(
      "isLoggedIn"
    );

  // No account

  if (!storedUser) {

    return <Navigate to="/register" />;

  }

  // Account exists but not logged in

  if (isLoggedIn !== "true") {

    return <Navigate to="/login" />;

  }

  // Logged in

  return <Navigate to="/dashboard" />;

}

export default Auth;