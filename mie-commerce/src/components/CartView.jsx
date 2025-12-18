import { useContext, useState } from "react";
import { cartContext } from "./CartProvider";

function CartView() {
  const { cart, resetCart, deleteProduct, totalCart } = useContext(cartContext);

  const [total, setTotal] = useState(0);

  function handleResetCart() {
    resetCart();
  }

  function handleDeleteProduct(id) {
    deleteProduct(id);
  }

  return (
    <div className="container">
      <h1>Carrito</h1>
      <div>
        <button onClick={handleResetCart}>Vaciar carrito</button>
      </div>
      <div>
        <p>Total:${totalCart.toFixed(2)}</p>
      </div>
      <div className="catalogo">
        {cart.length === 0 ? (
          <p>Carrito Vacio!</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => handleDeleteProduct(item.id)}>
                Quitar producto
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartView;
