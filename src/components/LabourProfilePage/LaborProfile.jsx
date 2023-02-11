import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./laborProfile.css";
import { useLocation, useNavigate } from "react-router-dom";
import Star from "../../components/Rating/Star";
import DateAndTime from "../DateAndTime/DateAndTime";

const LaborProfile = () => {
  const [modal, setModal] = useState(true);
  // const [modal2, setModal2] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="dateTimeModal">
        <Modal size="lg" isOpen={modal2} toggle={() => setModal2(!modal2)}>
          <ModalHeader toggle={() => setModal2(!modal2)}>
            <p style={{ fontSize: "25px", color: "#ac2132" }}>
              Choose your suitable date and time for task:
            </p>
          </ModalHeader>
          <ModalBody>
            <DateAndTime
              name={location.state.state.name}
              image={location.state.state.image}
            />
          </ModalBody>
        </Modal>
      </div> */}

      <div>
        <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
          <ModalHeader toggle={() => setModal(!modal)}>
            <p style={{ fontSize: "25px", color: "#ac2132" }}>
              Labor Detail Profile
            </p>
          </ModalHeader>
          <ModalBody>
            <div className="profileContainer">
              <div className="laborDetailSection">
                <div className="imageDiv">
                  <img
                    src={location.state.state.image}
                    alt="laborimg"
                    className="laborimg"
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%", marginTop: "10px" }}
                  />
                </div>
                <div className="nameDetail">
                  <h2>{location.state.state.name}</h2>
                  <p>
                    {location.state.state.ServiceName} For{" "}
                    {location.state.state.amount}Rs/hr
                  </p>
                </div>
                <div className="btnDiv">
                  <button
                    className="laborProfileBtn"
                    onClick={() => navigate("/progressBar")}
                  >
                    Go Back And Hire The Labor
                  </button>
                </div>
              </div>

              <div className="laborDetailHeading">
                <hr />
                <h2>Skill and Experience</h2>
                <p>
                  I have {location.state.state.Experience} years of experience,
                  bring my own supplies and would love to help you get the job
                  done
                </p>
              </div>
            </div>
            <div className="reviewsContainer">
              <div className="ReviewHeadingDiv">
                <h2>Reviews For {location.state.state.ServiceName}</h2>
              </div>
              <div className="reviewDetail">
                <div className="reviewrImageDiv">
                  <img
                    src={location.state.state.image}
                    alt="reviewrImg"
                    width={60}
                    height={60}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="nameDetail">
                    <h2>{location.state.state.name}</h2>
                    <p>
                      <Star stars={location.state.state.rating} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="reviewDiv">
                <p>
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque obcaecati, molestiae doloribus blanditiis."
                </p>
              </div>

              {/* Another Review Static DAta  */}

              <div className="reviewDetail">
                <div className="reviewrImageDiv">
                  <img
                    src={location.state.state.image}
                    alt="reviewrImg"
                    width={60}
                    height={60}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="nameDetail">
                    <h2>{location.state.state.name}</h2>
                    <p>
                      <Star stars={location.state.state.rating} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="reviewDiv">
                <p>
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque obcaecati, molestiae doloribus blanditiis."
                </p>
              </div>
              {/* One More */}
              <div className="reviewDetail">
                <div className="reviewrImageDiv">
                  <img
                    src={location.state.state.image}
                    alt="reviewrImg"
                    width={60}
                    height={60}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="nameDetail">
                    <h2>{location.state.state.name}</h2>
                    <p>
                      <Star stars={location.state.state.rating} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="reviewDiv">
                <p>
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque obcaecati, molestiae doloribus blanditiis."
                </p>
              </div>
              {/* LastOne */}
              <div className="reviewDetail">
                <div className="reviewrImageDiv">
                  <img
                    src={location.state.state.image}
                    alt="reviewrImg"
                    width={60}
                    height={60}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="nameDetail">
                    <h2>{location.state.state.name}</h2>
                    <p>
                      <Star stars={location.state.state.rating} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="reviewDiv">
                <p>
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque obcaecati, molestiae doloribus blanditiis."
                </p>
              </div>
              {/* end */}
            </div>
          </ModalBody>
        </Modal>
        <div className="goBackBtnDiv">
          <button
            className="goBackBtn"
            onClick={() => navigate("/progressBar")}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default LaborProfile;
