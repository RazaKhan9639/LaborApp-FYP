import React from "react";
import "./topServices.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "./SVGs/star.svg";
// import data from "./carousal.json";
import { data } from "./Data.js";

const TopServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="trending-services greyed-box">
        <div className="row">
          <div className="line">
            <div className="cl-5">
              <div className="ts-content">
                <p className="before-st"> Trending Services </p>
                <h2 className="section-title">Hot-sellers are up for grabs!</h2>
                <p className="section-exp text-grey">
                  "The High Quality Services are the best way to get your work
                  done. We have a wide range of services to choose from. we have
                  a wide range of services to choose from in our
                  marketplace.Please Visit our marketplace (Labour App) to get
                  your work done.We hope you will love our services."
                </p>
              </div>
            </div>
            {/* Card Section */}
            <div className="cl-7">
              <Slider {...settings}>
                {data &&
                  data.map((item) => {
                    return (
                      <div className="ts-card">
                        <div className="cardDiv" key={item.id}>
                          <div className="card-top">
                            <img
                              className="card-img"
                              src={item.img}
                              alt={item.img}
                            />
                          </div>
                          <div className="card-bottom">
                            <h3 className="title">{item.Title}</h3>
                            <span className="star-image">
                              <img src={star} alt="star" />
                              <span className="star">{item.star}</span>
                            </span>

                            <p className="price">RS: {item.price}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopServices;
