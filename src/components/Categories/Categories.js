import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import image from "./Images/Ac.png";
const Categories = () => {
  return (
    <>
      <Header />
      <ACCategories Image={image} name="Ac Services" data={data} />
      <Footer />
    </>
  );
};

export default Categories;
