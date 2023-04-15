import React from "react";
import "./App.scss";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { ProductContextProvider } from "./Context/ProductContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import { CartContextProvider } from "./Api/CartContext";
import Cart from "./Components/Cart";
function App() {
  return (
    <Router>
      <ProductContextProvider>
        <CartContextProvider>
          <div className="App bg-primary-light">
            <header className="App-header">
              <Nav />
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </CartContextProvider>
      </ProductContextProvider>
    </Router>
  );
}

export default App;
