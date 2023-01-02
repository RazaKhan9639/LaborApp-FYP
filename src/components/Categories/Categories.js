import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Ac.png";
const Categories = () => {
  return (
    <>
      <ACCategories Image={image} name="Ac Services" data={data} />
    </>
  );
};

export default Categories;
