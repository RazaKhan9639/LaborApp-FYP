import React from "react";
import "./about.css";
import pic from "./about.jpeg";

const About = () => {
  return (
    <>
      <div>
        <img
          src={pic}
          alt="About us page banner"
          height="400"
          width="1000"
          className="banner-image"
        />
      </div>

      <div className="contained">
        <div className="serv-details-desc about-description">
          <blockquote>
            <h2>Who We Are?</h2>
            Mr. Labor is an unrivaled online marketplace connecting home
            maintenance and handyman service providers and users in Lahore,
            Karachi, Islamabad, and Rawalpindi. We are recognized as the most
            trustworthy online platform to the people of these cities. With our
            determination and dedication, we have won thousands of hearts in
            these cities over the years and are expanding to other cities of
            Pakistan.
          </blockquote>
          <blockquote>
            <h2>What We Do?</h2>
            We aim to make home maintenance and handyman services more
            accessible, efficient, and easy-on-the-pocket for our customers.
            Along with this, we are also endeavoring to help thousands of local
            technicians in finding reliable earning opportunities and make a
            good livelihood. Our mission is to make the booking of plumbing,
            electrician, handyman, cleaning, carpentry, and fixing services
            risk-free and guaranteed. During registration process, we perform
            the background check and professional analysis of our technicians.
            Additionally, we offer trackable transaction process to accomplish
            sought-after user experience and 100% satisfaction.
          </blockquote>
          <blockquote>
            <h2>How We Do It – Technician ?</h2>
            Mr. Labor is connecting service providers (technicians) with users
            (customers) through our online platform. The customers and
            technicians can use our website and app (platforms), which are
            designed to make the booking of services technicians more accessible
            and risk-free. To get registered as a technician or signup as a
            customer at our platform, all you have to do is follow few simple
            steps and provide some basic information. Our hassle-free platforms
            have been crafted, keeping the unique needs of our users in mind.
            With us, you can enjoy a stress-free online service that ensures
            24/7 responsiveness.
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default About;
