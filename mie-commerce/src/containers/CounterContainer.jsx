import { useState } from "react";

import Counter from "../components/Counter";

function CounterContainer() {
  const [counter, setCounter] = useState(0);

  const resetCounter = () => setCounter(0);
  const sumar = () => setCounter(counter + 1);
  const restar = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <Counter
      counter={counter}
      addProd={sumar}
      restProd={restar}
      resetCounter={resetCounter}
    />
  );
}
export default CounterContainer;
