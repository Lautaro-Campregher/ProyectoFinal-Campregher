import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p id="parrafo">Unidades:{counter}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Counter;
