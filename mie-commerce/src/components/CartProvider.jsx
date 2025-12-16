import { createContext, useState } from "react";

//Contexto
export const cartContext = createContext();

//Provider
const Provider = cartContext.Provider;

//Envolvedor
function CartProvider(props) {
  const [total, setTotal] = useState(0);

  const valueContext = {
    total: total,
    setTotal: setTotal,
  };

  return <Provider value={valueContext}>{props.children}</Provider>;
}

export default CartProvider;
