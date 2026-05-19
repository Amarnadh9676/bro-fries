import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { supabase } from "../supabase";

function ProtectedRoute({ children }) {

  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const checkUser = async () => {

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      setUser(user);

      setLoading(false);

    };

    checkUser();

  }, []);

  if (loading) {

    return <h1>Loading...</h1>;

  }

  if (!user) {

    return <Navigate to="/login" />;

  }

  return children;
}

export default ProtectedRoute;