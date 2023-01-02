import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Cleaning.png";
const Cleaning = () => {
  return (
    <div>
      <ACCategories Image={image} name="Cleaning Services" data={data} />
    </div>
  );
};

export default Cleaning;
