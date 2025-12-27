import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import PopUp from "./PopUp";

function CartView() {
  const { cart, resetCart, deleteProduct, totalCart } = useContext(CartContext);

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

      const detallesCompra = await addDoc(compraRealizada, {
        comprador: {
          nombre,
          tel,
        },
        items: cart,
        total: totalCart,
      });

      setCompraData({
        nombre,
        tel,
        total: totalCart,
        orderId: detallesCompra.id,
      });
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
        {cart.length > 0 && (
          <button onClick={handleResetCart}>Vaciar carrito</button>
        )}
      </div>
      <div>
        <p>Total:${totalCart.toFixed(2)}</p>
      </div>
      <div className="carrito">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <p>${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleDeleteProduct(item.id)}>
                Quitar producto
              </button>
            </div>
          ))
        ) : (
          <p>Carrito Vacio!</p>
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
