import { Navigate } from "react-router-dom";

function Auth() {

  const storedUser = JSON.parse(
    localStorage.getItem(
      "brofriesUser"
    )
  );

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  // If no account → Register

  if (!storedUser) {

    return <Navigate to="/register" />;

  }

  // If account exists but not logged in

  if (!isLoggedIn) {

    return <Navigate to="/login" />;

  }

  // If logged in

  return <Navigate to="/dashboard" />;

}

export default Auth;