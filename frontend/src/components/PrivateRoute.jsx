import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth.jsx";
export default function PrivateRoute({ children }) {
  return isLoggedIn ? children : <Navigate to={"/login"} />;
}
