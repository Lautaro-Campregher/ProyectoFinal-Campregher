import { useEffect, useState } from "react";
import { getList } from "../components/fetch";
import Categorias from "../components/Categorias";

function CategoriasContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList().then((item) => setProducts(item));
  }, []);

  return <Categorias productos={products} />;
}

export default CategoriasContainer;
