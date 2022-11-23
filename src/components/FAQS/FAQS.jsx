import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./faqs.css";
import "./bannerFAQS.css";
import pic from "./termsCondition.svg";
import faqs from "./faqs.jpg";

const FAQS = (props) => {
  const [expandFAQ, setExpandFAQ] = useState(null);
  return (
    <>
      <Header />

      <div>
        <img src={faqs} alt="About us page banner" height="400" width="1000" className="banner-image" />
      </div>
      
      {props.data.faqs.map((faq, index) => {
        return (
          <>
            <div className="body">
              <div className="faq-section">
                <div
                  className="faq"
                  style={{ backgroundColor: props.data.backgroundColor }}
                >
                  <div className="faq-heading">
                    <span style={{ color: props.data.titleColor }}>
                      {faq.question}
                    </span>
                    {expandFAQ === index ? (
                      <MdRemove
                        onClick={() => setExpandFAQ(null)}
                        className="faq-icon"
                        size={30}
                        style={{ color: props.data.iconColor }}
                      />
                    ) : (
                      <MdAdd
                        onClick={() => setExpandFAQ(index)}
                        className="faq-icon"
                        size={30}
                        style={{ color: props.data.iconColor }}
                      />
                    )}
                  </div>
                  <div
                    className={expandFAQ === index ? "show show-faq-2" : "hide"}
                  >
                    <p
                      className={
                        expandFAQ === index ? "show-faq-text" : "hide-faq-text"
                      }
                      style={{ color: props.data.answerColor }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
};

export default FAQS;
