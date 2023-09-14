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
          <NavLink to="/">Sobre Nós</NavLink>
          <NavLink to="/">Projeto</NavLink>
          <NavLink to="/">Contato</NavLink>
          <NavLink to="/">Login</NavLink>
        </nav>
      </header>
    </>
  );
}
export default Nav;
