import { useContext } from "react";
import { cartContext } from "./CartProvider";

function Product(props) {
  const valueContext = useContext(cartContext);

  function handleAddCart() {
    valueContext.setTotal(valueContext.total + 1);
  }

  return (
    <div className="producto">
      <section className="card_producto">
        <h2>{props.product.title}</h2>
        <article>
          <img src={props.product.image} alt={props.product.title} />
        </article>
        <p>{props.product.description}</p>
        <p>${props.product.price}</p>
        <button onClick={handleAddCart}>Agregar al carrito</button>
      </section>
    </div>
  );
}

export default Product;
