import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    settings: { darkMode: false },
  });
  return (
    <div
      className={
        user.settings.darkMode
          ? "dark-mode bg-dark text-light"
          : "bg-light text-dark"
      }
      style={{ minHeight: "100vh" }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            🏠 Home
          </Link>
          <Link className="nav-link text-white" to="/profile">
            👤 Profile
          </Link>
          <Link className="nav-link text-white" to="/settings">
            ⚙️ Settings
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route
          path="/settings"
          element={<Settings user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
};

export default App;
