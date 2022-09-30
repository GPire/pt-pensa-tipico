import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header color={"green"} searchEnabled={true} />
      <h1>HOME PAGE!</h1>
      <Footer />
    </div>
  );
};

export default HomePage;
