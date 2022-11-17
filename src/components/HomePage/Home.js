import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeFirstSection from "./HomePage1/HomeFirstSection";
import Service from "./ServicesSection/Service";
const Home = () => {
  return (
    <div>
      <Header />
      <HomeFirstSection />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
