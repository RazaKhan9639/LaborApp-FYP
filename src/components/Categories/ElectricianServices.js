import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import image from "./Images/Electrician.png";
const ElectricianServices = () => {
  return (
    <div>
      <Header />
      <ACCategories Image={image} name="Electrician Services" data={data} />
      <Footer />
    </div>
  );
};

export default ElectricianServices;
