import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Home_Appliance.png";
const HomeApplianceServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="Home Appliance Services" data={data} />
    </div>
  );
};

export default HomeApplianceServices;
