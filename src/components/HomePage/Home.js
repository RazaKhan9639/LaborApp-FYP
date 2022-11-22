import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeFirstSection from "./HomePage1/HomeFirstSection";
import Service from "./ServicesSection/Service";
import Feature from "./HomeFeatureSection/Feature";
import TopServices from "./TopServices/TopServices";
import CustomerReview from "./CustomerReview/CustomerReview";
import TopServices2 from "./TopServicesLastSection/TopSer";
const Home = () => {
  return (
    <div>
      <Header />
      <HomeFirstSection />
      <Service />
      <Feature />
      <TopServices />
      <CustomerReview />
      <TopServices2 />

      <Footer />
    </div>
  );
};

export default Home;
