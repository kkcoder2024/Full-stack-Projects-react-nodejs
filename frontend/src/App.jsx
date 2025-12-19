import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Todo from "./pages/Todo.jsx";
import Home from "./pages/Home.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import WeatherApp from "./pages/Wheather-App.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather-app" element={<WeatherApp />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
