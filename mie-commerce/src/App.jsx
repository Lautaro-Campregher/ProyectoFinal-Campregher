import Header from "./components/Header";
import Main from "./components/Main";
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
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<CatalogoContainer />} />
          <Route
            path="/productos/product/:id"
            element={<ProductContainer />}
          ></Route>
          <Route path="categorias/product/:id" element={<ProductContainer />} />
          <Route path="/categorias" element={<CategoriasContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
