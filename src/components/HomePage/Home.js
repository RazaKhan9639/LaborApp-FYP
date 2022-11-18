import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeFirstSection from "./HomePage1/HomeFirstSection";
import Service from "./ServicesSection/Service";
import Feature from "./HomeFeatureSection/Feature";
const Home = () => {
  return (
    <div>
      <Header />
      <HomeFirstSection />
      <Service />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
