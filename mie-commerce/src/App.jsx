import Header from "./components/Header";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import CatalogoContainer from "./components/CatalogoContainer";
import ProductContainer from "./components/ProductContainer";
import CategoriasContainer from "./components/CategoriasContainer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<CatalogoContainer />} />
          <Route path="/product/:id" element={<ProductContainer />}></Route>
          <Route path="/categorias" element={<CategoriasContainer />} />
          <Route path="categorias/product/:id" element={<ProductContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
