import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeFirstSection from "./HomePage1/HomeFirstSection";
import Service from "./ServicesSection/Service";
import Feature from "./HomeFeatureSection/Feature";
import TopServices from "./TopServices/TopServices";
import Carousal from "./TopServices/Carousal";
const Home = () => {
  return (
    <div>
      <Header />
      <HomeFirstSection />
      <Service />
      <Feature />
      <TopServices />
      {/* <Carousal /> */}
      <Footer />
    </div>
  );
};

export default Home;
