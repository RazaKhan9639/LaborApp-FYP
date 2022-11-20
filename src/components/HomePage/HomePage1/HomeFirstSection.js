import React from "react";
import Style from "./Home1.module.css";
import img from "./home2.jpg";

const HomeFirstSection = () => {
  return (
    <>
      <div className={Style.maincontainer}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2 order-lg-1">
              <div className={Style.Heading}>
                <h1 className={Style.subheading}>
                  We are Providing
                  <br />
                  Our Best Services.
                </h1>
                <p className={Style.paragraph}>
                  Labours are the ones
                  <br /> who build a nation.
                </p>
                <button className={Style.btn}>Get Started</button>
              </div>
            </div>
            <div className="col-md-6 order-1 order-lg-2">
              <div className={Style.imagediv}>
                <img src={img} className={Style.image} alt="Home1Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFirstSection;
