import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Star.css";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star_icon" />
        ) : stars >= index + 0.5 ? (
          <FaStarHalfAlt className="star_icon" />
        ) : (
          <AiOutlineStar className="star_icon" />
        )}
      </span>
    );
  });
  return (
    <section className="rating-section">
      <div className="icon-style">
        {ratingStar}
        <p>{reviews} Customer reviews</p>
      </div>
    </section>
  );
};

export default Star;
