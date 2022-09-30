import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <Header color={"violet"} searchEnabled={false} />
      <h1>PRODUCT!</h1>
      <Footer />
    </div>
  );
};

export default Product;
