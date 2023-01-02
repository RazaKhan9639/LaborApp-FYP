import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/PestControl.jpg";

const PestControlServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="PestControl Services" data={data} />
    </div>
  );
};

export default PestControlServices;
