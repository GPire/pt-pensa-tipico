import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Product from "./routes/Product";
import Cart from "./routes/Cart";
import Confirm from "./routes/Confirm";
import NoMatch from "./routes/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
