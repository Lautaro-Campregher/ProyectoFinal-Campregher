import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import CounterContainer from "../containers/CounterContainer";

function Product({ product }) {
  if (!product) {
    return <p>Cargando producto...</p>;
  }

  const { addToCart } = useContext(CartContext);

  function handleAddCart(quantity) {
    addToCart(product, quantity);
  }

  return (
    <div className="producto">
      <section className="card_producto">
        <h2>{product.title}</h2>
        <article>
          <img src={product.img} alt={product.title} />
        </article>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <CounterContainer onAdd={handleAddCart} />
      </section>
    </div>
  );
}

export default Product;
