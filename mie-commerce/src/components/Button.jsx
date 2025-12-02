import "./Counter";

function Button({ resetCounter }) {
  return (
    <>
      <button className="btn" onClick={resetCounter}>
        Agregar al carrito
      </button>
    </>
  );
}

export default Button;
