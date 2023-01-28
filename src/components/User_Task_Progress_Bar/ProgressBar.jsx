import React from "react";
import { Stepper } from "@mui/material";
import { Step, StepLabel } from "@mui/material";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./ProgressBar.css";
import DescribeTask from "./../DescribeTask/DescribeTask";
import Shop from "../../Pages/User/ServiceProvider";
import DateAndTime from "../DateAndTime/DateAndTime";

const ProgressBar = () => {
  const { step, finalData } = useContext(UserContext);
  const showSteps = () => {
    switch (step) {
      case 0:
        return <DescribeTask />;

      case 1:
        return <Shop />;

      case 2:
        return <DateAndTime />;

      default:
        return "Not Page Found";
    }
  };

  return (
    <>
      <div className="progressBar">
        <div className="center-stepper">
          <Stepper
            activeStep={step}
            alternativeLabel
            style={{
              width: "60%",
              margin: "auto",
              padding: "10px",
            }}
            orientation="horizontal"
          >
            <Step>
              <StepLabel>Describe Your Task</StepLabel>
            </Step>
            <Step>
              <StepLabel>Browse Labor & Price</StepLabel>
            </Step>
            <Step>
              <StepLabel>Choose Date & Time</StepLabel>
            </Step>
            <Step>
              <StepLabel>Confirm Details</StepLabel>
            </Step>
          </Stepper>
        </div>
        {showSteps(step)}
      </div>
    </>
  );
};

export default ProgressBar;
