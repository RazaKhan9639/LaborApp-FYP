import React from "react";
import ACCategories from "./AC_Categories/AC_Categories.js";
import data from "./AC_Categories/Categories.json";

import image from "./Images/Painter.png";
const PainterServices = () => {
  return (
    <div>
      <ACCategories Image={image} name="Painting Services" data={data} />
    </div>
  );
};

export default PainterServices;
