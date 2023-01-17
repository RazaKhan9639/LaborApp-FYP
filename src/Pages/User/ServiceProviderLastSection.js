import React from "react";
import "./ServiceProvider.css";
import { AiOutlineDollar } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
const ServiceProviderLastSection = () => {
  const navigate = useNavigate();
  return (
    <section className="User_List_Last_Section">
      <div className="user_LastSection_Heading">
        <h3>Why hire Professional on Labor?</h3>
      </div>
      <div className="user_Points">
        <div className="user_point1">
          <span className="User_point_icon">
            <AiOutlineDollar />
          </span>
          <h4 className="Heading_LastSec">Free to Use</h4>
          <p className="Paragraph_LastSection">
            You Never pay to use Labor: Get Cost estimate,contact professional,
            and even book the job-all for no cost{" "}
          </p>
        </div>
        <div className="user_point1">
          <span className="User_point_icon">
            <HiUsers />
          </span>
          <h4 className="Heading_LastSec">Compare Price side-by-side</h4>
          <p className="Paragraph_LastSection">
            You'll know much cost your project will be before you hire a pro.
          </p>
        </div>
        <div className="user_point1">
          <span className="User_point_icon">
            <TiTick />
          </span>
          <h4 className="Heading_LastSec">Hire with confidence</h4>
          <p className="Paragraph_LastSection">
            with acess to 1M+ customer reviews and the pros' work history,
            you'll have all the info you need to make a hire.
          </p>
        </div>
      </div>
      <div className="User_lastSection_Button">
        <button className="U_btn" onClick={() => navigate("/")}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ServiceProviderLastSection;
