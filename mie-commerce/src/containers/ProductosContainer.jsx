import { useEffect, useState } from "react";
import Productos from "../components/Productos";
import { getList } from "../services/productsService";

function ProductosContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList()
      .then((item) => {
        setProducts(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Productos productos={products} />;
}

export default ProductosContainer;
