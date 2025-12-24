import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <section>
        <h2>Bienvenido a nuestra tienda</h2>
        <p>Descubre nuestros productos</p>
        <button className="btn">
          <Link to="/productos">Ver productos</Link>
        </button>
      </section>
    </div>
  );
}

export default Inicio;
