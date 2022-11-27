import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import image from "./Images/Home_Appliance.png";
const HomeApplianceServices = () => {
  return (
    <div>
      <Header />
      <ACCategories Image={image} name="Home Appliance Services" data={data} />
      <Footer />
    </div>
  );
};

export default HomeApplianceServices;
