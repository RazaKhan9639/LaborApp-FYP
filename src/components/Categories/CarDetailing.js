import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import image from "./Images/CarServices.png";
const CarDetailing = () => {
  return (
    <div>
      <Header />
      <ACCategories Image={image} name="Car Detailing Services" data={data} />
      <Footer />
    </div>
  );
};

export default CarDetailing;
