import Button from "./Button";

function Catalogo({ productos }) {
  return (
    <>
      <div className="container">
        <h1>Catalogo</h1>
        <div className="catalogo">
          {productos.map((item) => (
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
