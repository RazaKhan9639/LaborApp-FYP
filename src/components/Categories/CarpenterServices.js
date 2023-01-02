import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Carpenter.png";
const CarpenterServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="Carpenting Services" data={data} />
    </div>
  );
};

export default CarpenterServices;
