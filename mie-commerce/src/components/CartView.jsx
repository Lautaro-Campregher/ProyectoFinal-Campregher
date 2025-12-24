import { useContext, useState } from "react";
import { cartContext } from "../context/CartProvider";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import PopUp from "./PopUp";

function CartView() {
  const { cart, resetCart, deleteProduct, totalCart } = useContext(cartContext);

  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [compraData, setCompraData] = useState(null);

  function handleResetCart() {
    resetCart();
  }

  function handleDeleteProduct(id) {
    deleteProduct(id);
  }

  async function handleComprar(e) {
    e.preventDefault();

    if (!nombre || !tel || cart.length === 0) {
      alert("Llene los campos");
      return;
    }

    try {
      const compraRealizada = collection(db, "Ventas");

      await addDoc(compraRealizada, {
        comprador: {
          nombre,
          tel,
        },
        items: cart,
        total: totalCart,
      });

      setCompraData({ nombre, tel, total: totalCart });
      setShowPopUp(true);
      resetCart();
      setNombre("");
      setTel("");
    } catch (error) {
      console.error("Error en compra", error);
    }
  }

  return (
    <div className="container">
      {showPopUp && compraData && (
        <PopUp
          nombre={compraData.nombre}
          tel={compraData.tel}
          total={compraData.total}
          onClose={() => setShowPopUp(false)}
        />
      )}
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
      <form onSubmit={handleComprar}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            placeholder="Ej: Lucas"
            inputMode="text"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tel">Telefono de contacto</label>
          <input
            type="text"
            value={tel}
            placeholder="Ej:555-212135"
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
}

export default CartView;
