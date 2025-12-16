import { useParams } from "react-router-dom";
import { getProduct } from "../components/fetch";
import { useEffect, useState } from "react";
import Product from "../components/Product";

function ProductContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(id).then((item) => setProduct(item));
  }, [id]);

  return <Product product={product} />;
}

export default ProductContainer;
