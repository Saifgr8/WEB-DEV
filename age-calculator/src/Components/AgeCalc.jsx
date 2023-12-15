import React, { useState } from "react";
import "./AgeCalc.css";

const AgeCalc = () => {
  const [input, setInput] = useState("");
  const [age, setAge] = useState("");
  const currentDate = new Date().toISOString().split("T")[0];

  let calculateAge = () => {
    const today = new Date();
    const [inpYear, inpMonth, inpDay] = input.split("-");
    const ageYearDiff = today.getFullYear() - inpYear;
    const ageMonthDiff = today.getMonth() + 1 - inpMonth;
    const ageDayDiff = today.getDate() - inpDay;
    let tempResult = ageYearDiff;

    if (ageMonthDiff < 0 || (ageMonthDiff == 0 && ageDayDiff < 0)) {
      tempResult--;
    } else if (ageDayDiff === 0) {
      setAge(tempResult);
    }
    setAge(tempResult);
  };
  return (
    <div className="TopDiv">
      <div className="AgeDiv">
        <h1>Calculate your Age</h1>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="inputBox"
            value={input}
            type="date"
            placeholder="dd/mm/yyyy"
            max={currentDate}
          ></input>
        </div>
        <div>
          <button className="button" onClick={() => calculateAge()}>
            Calculate
          </button>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
          <h3>Your age is : </h3>
          <input className="Result" readOnly type="text" value={age} />
        </div>
      </div>
    </div>
  );
};

export default AgeCalc;
