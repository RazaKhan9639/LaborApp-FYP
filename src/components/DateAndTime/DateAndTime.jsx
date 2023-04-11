import React, { useContext, useEffect } from "react";
import { Calendar } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./dateTime.css";
import { UserContext } from "../../context/UserContext";

const DateAndTime = ({ image, name }) => {
  const { step, setStep, date, setDate, time, setTime } =
    useContext(UserContext);
  const timeArray = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
  ];
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  useEffect(() => {
    setDate(new Date());
    setTime("9:00 AM");
  }, [setDate, setTime]);

  return (
    <>
      <div className="dateAndTimeContainer">
        <div className="calendarsection">
          <div className="labourimg">
            <img src={image} alt="LaborImg" width={40} height={40} />
            <h2>{name}</h2>
          </div>
          <div className="calendar">
            <Calendar
              date={date}
              onChange={(item) => setDate(item)}
              minDate={new Date()}
              maxDate={addDays(new Date(), 6)}
            />
          </div>

          <div className="time">
            <select
              name="Select Time"
              id="time Selection"
              onChange={handleTime}
              value={time}
            >
              {timeArray.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="timeText">
            <p>
              You can chat to adjust task details or
              <br />
              change start time after confirming.
            </p>
          </div>
        </div>
        <div className="DetailSection1">
          <p style={{ color: "#5b6baa" }}>Requested For:</p>
          <p>
            {format(date, "dd,MMM,yyyy")}{" "}
            <span
              style={{
                color: "#5b6baa",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              And
            </span>
            {time}
          </p>
          {step && (
            <button className="RequestBtn" onClick={() => setStep(step + 2)}>
              Select and Continue
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DateAndTime;
