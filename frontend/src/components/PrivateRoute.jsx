import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "../utils/auth";
import { AlertBox } from "./AlertBox";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verify = async () => {
      const isAuth = await checkAuth();

      if (!isAuth) {
        AlertBox("error", "You cannot visit project page without login", 401);
      }

      setAuthenticated(isAuth);
      setLoading(false);
    };

    verify();
  }, []);

  if (loading) return null;

  return authenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
}
