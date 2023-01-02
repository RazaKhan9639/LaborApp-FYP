import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/plumberServices.png";

const PlumbingServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="Plumbing Services" data={data} />
    </div>
  );
};

export default PlumbingServices;
