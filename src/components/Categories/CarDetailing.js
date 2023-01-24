import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";
import image from "./Images/CarServices.png";
const CarDetailing = () => {
  return (
    <div>
      <ACCategories Image={image} name="Car Detailing Services" data={data} />
    </div>
  );
};

export default CarDetailing;
