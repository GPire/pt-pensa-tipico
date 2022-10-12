import React from "react";

import Header from "../components/Header";
import MainPicture from "../components/MainPicture";
import Footer from "../components/Footer";
import MainDescription from "../components/MainDescription";
import SliderCard from "../components/SliderCard";

import products from "../data/products.json";

const HomePage = () => {
  const newProducts = products.filter((product) => {
    return product.isNew === true;
  });
  const lovedProducts = products.filter((product) => {
    return product.isLoved === true;
  });

  return (
    <div className="container-fluid">
      <Header color={"#9f863d"} searchEnabled={true} />
      <MainPicture />
      <MainDescription />
      <SliderCard title="Scopri le novità" products={newProducts} />
      <SliderCard title="I più amati" products={lovedProducts} />

      <Footer />
    </div>
  );
};

export default HomePage;
