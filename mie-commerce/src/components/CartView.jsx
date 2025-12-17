import { useContext } from "react";
import { cartContext } from "./CartProvider";

function CartView() {
  const { cart } = useContext(cartContext);
  return (
    <div className="container">
      <h1>Carrito</h1>
      <div className="catalogo">
        {cart.lenght === 0 ? (
          <p>Carrito Vacio!</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartView;
