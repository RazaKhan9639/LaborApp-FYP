import React, { useState, useContext } from "react";
import { Calendar } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./dateTime.css";
// import img from "./1.jpg";
import { UserContext } from "../../context/UserContext";

const DateAndTime = ({ image, name }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [selectedDateTimeString, setSelectedDateTimeString] = useState("");
  const { step, setStep } = useContext(UserContext);
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
              date={new Date()}
              onChange={(item) => console.log(item)}
              minDate={new Date()}
              maxDate={addDays(new Date(), 7)}
            />
          </div>
          <div className="time">
            <select name="Select Time" id="time Selection">
              <option value="9:00 AM">9:00 AM</option>
              <option value="9:30 AM">9:30 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="3:30 PM">3:30 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="4:30 PM">4:30 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="6:00 PM">6:00 PM</option>
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
          <p>Requested For:</p>
          <p>Date And Time</p>
          <button className="RequestBtn" onClick={() => setStep(step + 2)}>
            {" "}
            Select and Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default DateAndTime;
