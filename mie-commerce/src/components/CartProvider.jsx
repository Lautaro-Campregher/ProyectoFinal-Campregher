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

  function resetCart() {
    setCart([]);
  }

  function deleteProduct(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  const totalCart = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

  return (
    <Provider value={{ cart, addToCart, resetCart, deleteProduct, totalCart }}>
      {children}
    </Provider>
  );
}

export default CartProvider;
