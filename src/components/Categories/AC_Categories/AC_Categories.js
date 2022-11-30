import React, { useState } from "react";
import "./Categories.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const AC_Categories = (props) => {
  const [search, setSearch] = useState("");
  return (
    <>
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
            <div className="searchbar">
              <h2 className="section-title mb-3">All Categories</h2>
              <div className="SearchIcon_mainDiv">
                <div className="SearchIcon">
                  <SearchOutlinedIcon className="Icon" />
                </div>
                <input
                  type="text"
                  className="searchinput"
                  placeholder="Search here"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            {props.data
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.Categories.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
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
    </>
  );
};

export default AC_Categories;
