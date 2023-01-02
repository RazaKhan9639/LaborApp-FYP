import React from "react";

import HomeFirstSection from "./HomePage1/HomeFirstSection";
import Service from "./ServicesSection/Service";
import Feature from "./HomeFeatureSection/Feature";
import TopServices from "./TopServices/TopServices";
import CustomerReview from "./CustomerReview/CustomerReview";
import TopServices2 from "./TopServicesLastSection/TopSer";
const Home = () => {
  return (
    <div>
      <HomeFirstSection />
      <Service />
      <Feature />
      <TopServices />
      <CustomerReview />
      <TopServices2 />
    </div>
  );
};

export default Home;
