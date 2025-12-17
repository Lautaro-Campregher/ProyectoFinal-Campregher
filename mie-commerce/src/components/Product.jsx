import { useContext } from "react";
import { cartContext } from "./CartProvider";
import CounterContainer from "../containers/CounterContainer";

function Product({ product }) {
  const { addToCart } = useContext(cartContext);

  function handleAddCart(quantity) {
    addToCart(product, quantity);
  }

  return (
    <div className="producto">
      <section className="card_producto">
        <h2>{product.title}</h2>
        <article>
          <img src={product.image} alt={product.title} />
        </article>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <CounterContainer onAdd={handleAddCart} />
      </section>
    </div>
  );
}

export default Product;
