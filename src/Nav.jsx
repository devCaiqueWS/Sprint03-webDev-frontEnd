import {} from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <header>
        <img src="./public//logo-alerta-enchente.png" alt="logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Sobre">Sobre Nós</NavLink>
          <NavLink to="/Projeto">Projeto</NavLink>
          <NavLink to="/Contato">Contato</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </nav>
      </header>
    </>
  );
}
export default Nav;
