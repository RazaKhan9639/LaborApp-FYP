import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("9.00 AM");
  const [location, setLocation] = useState("");

  const contextValue = {
    step,
    setStep,
    userData,
    setUserData,
    finalData,
    setFinalData,
    modal,
    setModal,
    date,
    setDate,
    time,
    setTime,
    location,
    setLocation,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
