import Header from "./components/Header";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import ProductContainer from "./containers/ProductContainer";

import CartView from "./components/CartView";
import Inicio from "./components/Inicio";
import ProductosContainer from "./containers/ProductosContainer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/productos/product/:id" element={<ProductContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
