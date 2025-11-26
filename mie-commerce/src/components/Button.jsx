import { useState } from "react";
import "./Counter";

function Button() {
  //const [button, useButton] = useState(false);

  const handleClick = () => {};

  return (
    <button className="btn" onClick={handleClick}>
      {" "}
      Agregar al carrito
    </button>
  );
}

export default Button;
