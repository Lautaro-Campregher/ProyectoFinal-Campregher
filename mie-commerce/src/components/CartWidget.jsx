import { useContext } from "react";
import { cartContext } from "./CartProvider";

function CartWidget() {
  const valueContext = useContext(cartContext);

  return (
    <div>
      🛒
      <span>{valueContext.total}</span>
    </div>
  );
}

export default CartWidget;
