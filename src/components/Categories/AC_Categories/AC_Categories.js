import React from "react";
// import image from "./Raza2.png";
import "./Categories.css";

const AC_Categories = (props) => {
  return (
    <>
      {/* <Header /> */}
      <section className="CategoriesSection">
        <div className="CategoriesSection__container">
          <div className="CategoriesSection__container__image">
            <div className="CategoriesSection__container__text">
              <h1 className="Heading1">{props.name}</h1>
            </div>
            <img
              src={props.Image}
              alt="AC Services"
              className="Category_Image"
            />
          </div>

          <div className="top-services greyed-box mb-4">
            <h2 className="section-title mb-3">All Categories</h2>
            {props.data.map((item) => {
              return (
                <div className="top-services-inner">
                  <ul className="topservices-ul no-disc">
                    <li className="tsu-item">
                      <a href="/home">{item.Categories}</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default AC_Categories;
