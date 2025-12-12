import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Todo from "./pages/Todo.jsx";
import Home from "./pages/Home.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
