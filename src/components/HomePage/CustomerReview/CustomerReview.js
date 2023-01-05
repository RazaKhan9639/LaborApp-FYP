import React from "react";
import "./customerReview.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./review.json";
import star from "./SVGs/star.svg";

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <section className="customer-speaks">
        <div className="section-inner">
          <div className="text-center">
            <h2 className="section-Title">What Our Customers Say!</h2>
          </div>
        </div>
        <Slider {...settings}>
          {Data &&
            Data.map((item, index) => {
              return (
                <div className="cl-12" key={index}>
                  <div className="review-card" key={item.id}>
                    <div className="review-card-inner">
                      <div className="reviewer">
                        <div className="reviewer-img">
                          <img src={item.image} alt="reviewer" />
                          <h4 className="reviewer-name">{item.name}</h4>
                        </div>
                        <div className="review-card-content">
                          <p className="review-text">{item.message}</p>

                          <div className="reviewer-info">
                            <p className="reviewer-date">{item.date}</p>
                            <div className="reviewer-rating">
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                              <img src={star} alt="star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </section>
    </>
  );
};

export default CustomerReview;
