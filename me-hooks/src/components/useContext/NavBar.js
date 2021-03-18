import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <NavLink exact to="/" className="navbar-brand active">
          Home
        </NavLink>
        <NavLink exact to="/about" className="navbar-brand">
          About
        </NavLink>
        <NavLink exact to="/login" className="navbar-brand">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
