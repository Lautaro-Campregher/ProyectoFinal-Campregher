function Product(props) {
  return (
    <div className="producto">
      <section className="card_producto">
        <h2>{props.product.title}</h2>
        <article>
          <img src={props.product.image} alt={props.product.title} />
        </article>
        <p>{props.product.description}</p>
        <p>{props.product.price}</p>
      </section>
    </div>
  );
}

export default Product;
