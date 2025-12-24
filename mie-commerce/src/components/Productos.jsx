import { useState } from "react";
import Button from "./Button";

function Productos({ productos }) {
  const [categoriaBuscada, setCategoriaBuscada] = useState("");

  const productosFiltrados = productos.filter((item) =>
    item.category.toLowerCase().includes(categoriaBuscada.toLowerCase())
  );
  return (
    <div className="container-productos">
      <input
        className="search-bar"
        type="text"
        placeholder="Buscar categoría..."
        value={categoriaBuscada}
        onChange={(e) => setCategoriaBuscada(e.target.value)}
      />

      <div className="catalogo">
        {productosFiltrados.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <img src={item.img} alt={item.title} />
            <h4>{item.category}</h4>
            <Button id={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
