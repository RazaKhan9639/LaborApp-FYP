import React from "react";
import Data from "../../User.json";
import User from "./User";
import "./ServiceProvider.css";

const shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="SProvider__Heading">Our Service Providers</h1>
      </div>
      <div className="products">
        {Data.map((product) => (
          <User data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default shop;
