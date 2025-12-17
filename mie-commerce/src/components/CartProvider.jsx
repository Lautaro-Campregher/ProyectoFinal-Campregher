import { createContext, useEffect, useState } from "react";

//Contexto
export const cartContext = createContext();

//Provider
const Provider = cartContext.Provider;

//Envolvedor
function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const cartLs = localStorage.getItem("cart");
    return cartLs ? JSON.parse(cartLs) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, quantity) {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  }

  const totalUnits = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Provider value={{ cart, addToCart, totalUnits }}>{children}</Provider>
  );
}

export default CartProvider;
