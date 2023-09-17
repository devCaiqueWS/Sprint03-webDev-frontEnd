import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-alerta-enchente.png";
import "../css/Nav.css";
import "../mediaQuery/Nav-media.css"

function Nav() {
  const location = useLocation();
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Sobre">Sobre Nós</NavLink>
          <NavLink to="/Projeto">Projeto</NavLink>
          <NavLink to="/Contato">Contato</NavLink>
          <div className="login-btn-style">
            <NavLink
              to="/Login"
              className={location.pathname === "/Login" ? "black-link" : ""}
            >
              Login
            </NavLink>
            
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;