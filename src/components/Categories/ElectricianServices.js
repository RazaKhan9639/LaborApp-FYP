import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Electrician.png";
const ElectricianServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="Electrician Services" data={data} />
    </div>
  );
};

export default ElectricianServices;
