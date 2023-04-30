import React from "react";
import "./confirmDetails.css";
import { AiFillCalendar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
const ConfirmDetail = () => {
  return (
    <div className="confirm-details-container">
      <div className="profile-details-section">
        <div className="profile-detail">
          <h4
            style={{ margin: "auto 0", color: "#5b6baa", paddingLeft: "10px" }}
          >
            Ac Repairing
          </h4>
          <p style={{ color: "black", fontSize: "1rem", margin: "auto" }}>
            Nadeem
          </p>
          <img
            src="https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="SProviderImage"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              border: "1px solid #ac2132",
            }}
          />
        </div>
        <hr style={{ color: "#ac2132" }} />
        <div className="service-details">
          <h4 style={{ color: "#5b6baa" }}>Service Details</h4>
          <div className="date-detail">
            <AiFillCalendar
              style={{
                color: "#ac2132",
                width: "2rem",
                height: "2rem",
              }}
            />
            <p>12/5/2023</p>
          </div>
          <div className="location-details">
            <ImLocation2
              style={{
                color: "#ac2132",
                marginLeft: "15px",
                width: "2rem",
                height: "2rem",
              }}
            />
            <p className="s-locatio-details">House No 3,street No 5, wahdat Road Lahore.</p>
          </div>
          <div className="taskType-details">
            <FaTasks
              style={{
                color: "#ac2132",
                marginLeft: "15px",
                width: "2rem",
                height: "2rem",
              }}
            />

            <p>medium</p>
          </div>
          <div className="EditTask">
            <FiEdit
              style={{
                color: "#ac2132",
                width: "2rem",
                height: "2rem",
              }}
            />
            <p style={{ margin: "10px", fontSize: "1rem", color: "#000" }}>
              <a href=""> Edit Task</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="payment-details-section">
        <div className="payment-detail">
          <h4 style={{ color: "#5b6baa" }}>Payment Details</h4>
          <div className="payment-details">
            <p><span style={{color:'#ac2132',fontWeight:'600'}}>Service Price:</span> 2000 Rs</p>
            <p><span style={{color:'#ac2132',fontWeight:'600'}}>Service Tax:</span> 500 Rs </p>
            <p><span style={{color:'#ac2132',fontWeight:'600'}}>Sub Total:</span> 2500 Rs</p>
          </div>
        </div>
        <div className="payment-method">
          <h4 style={{ color: "#5b6baa" }}>Payment Method</h4>
          <div className="payment-method-details">
            <p>Cash In Hands </p>
            
          </div>
          
        </div>
        
      </div>
      <button className="placeOrderBtn">Place Order</button>
    </div>
  );
};

export default ConfirmDetail;
