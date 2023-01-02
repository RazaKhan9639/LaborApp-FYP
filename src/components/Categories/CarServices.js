import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/CarServices.png";

const CarServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="Car Services" data={data} />
    </div>
  );
};

export default CarServices;
