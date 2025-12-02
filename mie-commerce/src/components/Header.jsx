import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header_title">FULL SHOP</h1>
      <nav className="header_nav nav">
        <NavLink to="/" className="nav__link">
          Inicio
        </NavLink>

        <NavLink to="/products" className="nav__link">
          Productos
        </NavLink>

        <NavLink to="/cat-1" className="nav__link">
          Categorias
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
