import React from "react";
import Introduction from "./pages/Introduction";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ManageProducts from "./pages/ManageProducts";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/manageProducts" element={<ManageProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
