import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Handyman.png";
const Handyman = () => {
  return (
    <div>
      <ACCategories Image={image} name="Handyman Services" data={data} />
    </div>
  );
};

export default Handyman;
