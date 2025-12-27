import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="inicio">
      <div className="inicio-content">
        <h2>Bienvenido a nuestra tienda</h2>
        <p>Descubrí nuestros productos</p>
        <Link to="/productos" className="btn">
          Ver productos
        </Link>
      </div>

      <div className="inicio-img">
        <img
          src="https://img.freepik.com/foto-gratis/signo-ventas-viernes-negro-luz-neon_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Imagen principal de la tienda"
        />
      </div>
    </section>
  );
}

export default Inicio;
