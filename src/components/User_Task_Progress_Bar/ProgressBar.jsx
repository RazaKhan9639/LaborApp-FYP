import React from "react";
import { Stepper } from "@mui/material";
import { Step, StepLabel } from "@mui/material";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./ProgressBar.css";
import DescribeTask from "./../DescribeTask/DescribeTask";
import Shop from "../../Pages/User/ServiceProvider";

import ConfirmDetail from "./../ConfirmDetails/ConfirmDetail";

const ProgressBar = () => {
  const { step, finalData } = useContext(UserContext);
  const showSteps = () => {
    switch (step) {
      case 0:
        return <DescribeTask />;

      case 1:
        return <Shop />;

      case 3:
        return <ConfirmDetail />;
      default:
        return "Not Page Found";
    }
  };

  const style = {
    "& .MuiStepLabel-root .Mui-completed": {
      color: "#ac2132", // circle color (COMPLETED)
    },
    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
      color: "#3a396b", // Just text label (COMPLETED)
      fontWeight: "bold",
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: "#3a396b", // circle color (ACTIVE)
    },
    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
      color: "#ac2132", // Just text label (ACTIVE)
      fontWeight: "bold",
    },
    "& .MuiStepLabel-root .Mui-disabled": {
      fontWeight: "bold",
    },
    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
      fill: "#cbd6e5", // circle's number (ACTIVE)
      fontWeight: "bold",
    },
  };

  return (
    <>
      <div className="progressBar">
        <div className="center-stepper">
          <Stepper
            activeStep={step}
            alternativeLabel
            style={{
              width: "80%",
              margin: "auto",
              padding: "10px",
              fontWeight: "bold",
            }}
            orientation="horizontal"
          >
            <Step sx={style}>
              <StepLabel>Describe Your Task</StepLabel>
            </Step>
            <Step sx={style}>
              <StepLabel>Browse Labor & Price</StepLabel>
            </Step>
            <Step sx={style}>
              <StepLabel>Choose Date & Time</StepLabel>
            </Step>
            <Step sx={style}>
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
