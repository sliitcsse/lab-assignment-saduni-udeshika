import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-item">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </div>
  );
}
