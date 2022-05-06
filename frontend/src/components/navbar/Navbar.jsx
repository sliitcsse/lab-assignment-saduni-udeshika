import React from "react";
import { Link } from "react-router-dom";
import linkRoutes from "../../constants/linkRoutes";
import "./navbar.css";

export default function Navbar({ userData }) {
  return (
    <div className="nav">
      <div className="nav-item">
        {linkRoutes
          .filter((e) => e.type === userData.type)
          .map((route) => (
            <Link to={route.to} key={route.to}>
              {route.name}
            </Link>
          ))}
      </div>
    </div>
  );
}
