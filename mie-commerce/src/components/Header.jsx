import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

function Header() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <header className="header">
      <h1 className="header_title">FULL SHOP</h1>
      <nav className="header_nav nav">
        <NavLink to="/" className="nav__link">
          Inicio
        </NavLink>

        <NavLink to="/productos" className="nav__link">
          Productos
        </NavLink>

        <NavLink to="/carrito" className="nav__link">
          🛒Carrito
          {totalQuantity > 0 && (
            <span className="cart-badge">{totalQuantity}</span>
          )}
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
