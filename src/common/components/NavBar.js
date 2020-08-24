import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [link, setLink] = useState("home");
  const setHome = () => setLink("home");
  const setAll = () => setLink("all");
  const setSL = () => setLink("sl");
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        <li className={link === "home" ? "selected" : ""}>
          <Link to="/" onClick={setHome}>
            <span className="navbar-item">Home</span>
          </Link>
        </li>
        <li className={link === "all" ? "selected" : ""}>
          <Link to="/allCities" onClick={setAll}>
            <span className="navbar-item">All</span>
          </Link>
        </li>
        <li className={link === "sl" ? "selected" : ""}>
          <Link to="/shortlistedCities" onClick={setSL}>
            <span className="navbar-item">Shortlisted</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
