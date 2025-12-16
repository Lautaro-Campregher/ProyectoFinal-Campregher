import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function Header() {
  return (
    <header className="header">
      <h1 className="header_title">FULL SHOP</h1>
      <nav className="header_nav nav">
        <NavLink to="/" className="nav__link">
          Inicio
        </NavLink>

        <NavLink to="/categorias" className="nav__link">
          Categorias
        </NavLink>
      </nav>
      <CartWidget />
    </header>
  );
}

export default Header;
