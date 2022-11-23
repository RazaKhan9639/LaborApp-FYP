import React from "react";
// import img from "./images/plumber.png";
import img from "./images/24-7.png";
import check from "./SVGs/check.svg";
import clock from "./SVGs/clock.svg";
import box from "./SVGs/box.svg";
import wallet from "./SVGs/wallet.svg";
import tick from "./SVGs/tick.svg";
import hand from "./SVGs/hand.svg";
import badge from "./SVGs/badge.svg";
import apple from "./SVGs/apple.svg";
import google from "./SVGs/google.svg";
import "./features.css";
const Feature = () => {
  return (
    <>
      <section className="features">
        <div className="line">
          <div className="cl-7">
            <div className="features-inside">
              <div className="features-svg">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={img}
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet={img}
                    type="image/png"
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet={img}
                    type="image/jpg"
                  />
                  <img
                    className="banner-bg"
                    src={img}
                    alt="Plumber_Services"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="cl-4">
            <div className="features-list">
              <span className="before-st">Why Choose Us?</span>
              <ul className="features-ul no-disc">
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={check} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    "Connects you to"
                    <strong>Verified And Trained Technicians.</strong>
                  </span>
                </li>
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={clock} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    <strong>Saves Your Time</strong> through an easy and
                    efficient booking process.
                  </span>
                </li>
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={box} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    Offers <strong>Impeccable Customer Support.</strong>
                  </span>
                </li>
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={wallet} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    Ensures <strong>Cost-effectiveness.</strong>
                  </span>
                </li>
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={tick} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    Provides{" "}
                    <strong>High-quality, Reliability and Safety.</strong>
                  </span>
                </li>
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={hand} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    Promises <strong>Doorstep Services,</strong> saves
                    travelling costs.
                  </span>
                </li>
                <li className="features-listitem">
                  <span className="fli-icon">
                    <img src={badge} alt="check_Icon" />
                  </span>
                  <span className="fli-text">
                    Guarantees <strong>Secure Transactions.</strong>
                  </span>
                </li>
                <li className="features-listitem">
                  <a href="#" target="_blank" className="me-1">
                    <img src={apple} alt="Apple_Store" />
                  </a>
                  <a href="#" target="_blank" className="me-1">
                    <img src={google} alt="Google_Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
