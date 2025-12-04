import Button from "./Button";

function Catalogo(props) {
  return (
    <>
      <div className="container">
        <h2>Catalogo</h2>
        <div className="catalogo">
          {props.productos.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <h4>{item.category}</h4>
              <Button id={item.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogo;
