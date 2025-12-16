import { useEffect, useState } from "react";
import Catalogo from "../components/Catalogo";
import { getList } from "../components/fetch";

function CatalogoContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getList().then((item) => setProducts(item));
  }, []);

  return <Catalogo productos={products} />;
}

export default CatalogoContainer;
