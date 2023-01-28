import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BiCurrentLocation } from "react-icons/bi";
import "./describeTask.css";

const DescribeTask = () => {
  const { step, setStep } = useContext(UserContext);
  return (
    <>
      <div className="describeTaskContainer">
        <h2> ServiceName</h2>
        <div className="locationWrapper">
          <h3>Enter Location</h3>
          <div className="location">
            <div className="locationhero">
              <BiCurrentLocation className="locationIcon" />
              <input
                type="text"
                placeholder="Enter Your Location Here"
                className="InputLocation"
              />
              <input
                type="Text"
                placeholder="Enter Your ZipCode"
                className="locationZipCode"
              />
            </div>
          </div>
          <div className="addressConfirmationBtn">
            <button className="confirmAddress">Continue</button>
          </div>
        </div>
        {/* 2nd Section */}
        <div className="TaskOptionWrapper">
          <h3>Choose Option</h3>
          <div className="TaskOption">
            <h2>How Big is your Task?</h2>
            <hr />
            <div className="taskOptionhero">
              <div className="tasksRadioWrapper">
                <input
                  type="radio"
                  name="taskOption"
                  className="taskOptionRadioBtn"
                />
                <label>Small-Est. 1hr</label>
                <input
                  type="radio"
                  name="taskOption"
                  className="taskOptionRadioBtn"
                />
                <label>Medium-Est. 2hr-3hr</label>
                <input
                  type="radio"
                  name="taskOption"
                  className="taskOptionRadioBtn"
                />
                <label>Large-Est. 4+hr</label>
              </div>
            </div>
          </div>
          <div className="addressConfirmationBtn">
            <button className="confirmAddress">Continue</button>
          </div>
        </div>

        {/* 3red section */}
        <div className="taskDetailWrapper">
          <h3>Enter Your Task Detail:</h3>
          <div className="taskDetail">
            <div className="taskDetailHero">
              <p>
                Start the conversation and tell Your Labor what you need done.
                This help us show you only qualified and available labors for
                the job. Don't worry you can edit it later.{" "}
              </p>
              <textarea
                name="TaskDetail"
                id=""
                cols={10}
                rows={10}
                className="taskDetailInput"
                placeholder="Describe Your Task Here, We will show this to the labors with spacific skills."
              />

              <p className="taskDetailParagraph">
                if you need two or more labors, please post additional for each
                labor needed. Also you can mention
              </p>
            </div>
          </div>
          <div className="addressConfirmationBtn">
            <button
              className="confirmAddress"
              onClick={() => setStep(step + 1)}
            >
              See Labors & Prices
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescribeTask;
