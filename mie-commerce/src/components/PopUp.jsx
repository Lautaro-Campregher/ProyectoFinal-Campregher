function PopUp({ nombre, tel, total, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>COMPRA REALIZADA</h2>
        <p>Total: ${total.toFixed(2)}</p>
        <p>Nombre: {nombre}</p>
        <p>Teléfono: {tel}</p>
        <h3>¡Muchas gracias por confiar en nosotros!</h3>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default PopUp;
