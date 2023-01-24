import React from "react";
import "./servicecatpage.css";
import img from "./Images/scpAc.jpg";
import img1 from "./Images/img1.webp";
import img2 from "./Images/img2.webp";
import img3 from "./Images/img3.webp";
import { NavLink } from "react-router-dom";

const ServiceCategoriesPage = () => {
  return (
    <>
      <div className="scpImgContainer">
        <div className="scpImgWrapper">
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "42.20213%" }}
          ></div>
          <picture>
            <img src={img} alt="" aria-hidden="true" className="scpImage" />
          </picture>
        </div>
        <div className="scpCardTextBox">
          <div className="scpCardDetail">
            <h1 className="scpTitle"> Minor Home Repair</h1>
            <div className="scpTitleSeperator"></div>
            <p className="scpSubTitle">
              Jack (and) Jill of all trades can handle most of your minor home
              repair!
            </p>
            <NavLink to="/#" className="BookNowBtn">
              Book Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="secondSectionContainer">
        <div className="textArea">
          <h1 className="scpTitle2"> Minor Home Repair</h1>
          <p className="scpMinorDetail">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facere rerum maxime
            officia veritatis modi aperiam maiores eius harum doloribus qui
            totam iste culpa, sint libero suscipit dolore labore voluptates a.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sequi
            architecto! Blanditiis sit voluptas atque aspernatur cupiditate.
            Illum illo accusantium, esse, aperiam aliquid sequi doloremque
            praesentium vitae veniam laboriosam amet.
            <br />
            <br />
            ....Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            sequi
          </p>
        </div>
        <div className="scpImg">
          <img src={img} alt="" className="scpImg1" />
        </div>
      </div>

      <div className="thirdSectionContainer">
        <div className="thirdSectionWrapper">
          <div className="thirdSectionDiv1">
            <div className=" thirdSectionDiv2 ">
              <div className="HowItWorks">How it works</div>
            </div>
            <div className="HowItWorks__StepsContainer">
              <div className="HowItWorksStep__ColumnContainer ">
                <div
                  className=" gatsby-image-wrapper"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: 139,
                    height: 130,
                  }}
                >
                  <picture>
                    <img
                      src={img1}
                      alt="___"
                      width={139}
                      height={130}
                      loading="lazy"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                    />
                  </picture>
                </div>
                <div className="HowItWorksStep__TitleContainer">
                  <div className="HowItWorksStep__Position">1</div>
                  <div className="HowItWorksStep__Title">
                    Describe Your Task
                  </div>
                </div>
                <div className="HowItWorksStep__Description">
                  Tell us what you need done, when and where it works for you.
                </div>
              </div>
              <div className="HowItWorks__TabletDesktopSpacer-sc-gmqw48-1 bTFqIx" />
              <div className="HowItWorksStep__ColumnContainer">
                <div
                  className=" gatsby-image-wrapper"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: 147,
                    height: 130,
                  }}
                >
                  <img
                    src={img2}
                    alt="___"
                    width={147}
                    height={130}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </div>
                <div className="HowItWorksStep__TitleContainer">
                  <div className="HowItWorksStep__Position">2</div>
                  <div className="HowItWorksStep__Title">
                    Choose Your Tasker
                  </div>
                </div>
                <div className="HowItWorksStep__Description">
                  Browse trusted Taskers by skills, reviews, and price. Chat
                  with them to confirm details.
                </div>
              </div>
              <div className="HowItWorks__TabletDesktopSpacer-sc-gmqw48-1 bTFqIx" />
              <div className="HowItWorksStep__ColumnContainer">
                <div
                  className=" gatsby-image-wrapper"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: 143,
                    height: 130,
                  }}
                >
                  <picture>
                    <img
                      src={img3}
                      alt="___"
                      width={143}
                      height={130}
                      loading="lazy"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        opacity: 1,
                        transition: "opacity 500ms ease 0s",
                      }}
                    />
                  </picture>
                </div>
                <div className="HowItWorksStep__TitleContainer">
                  <div className="HowItWorksStep__Position">3</div>
                  <div className="HowItWorksStep__Title">Get It Done!</div>
                </div>
                <div className="HowItWorksStep__Description">
                  Your Tasker arrives and gets the job done. Pay securely and
                  leave a review, all through TaskRabbit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <NavLink to="/#" className="BookNowBtn2">
            Book Now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ServiceCategoriesPage;
