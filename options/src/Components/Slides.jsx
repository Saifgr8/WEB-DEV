import React, { useState } from "react";
import "./Slides.css";

const Slides = ({ data }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReset = () => {
    setCurrentIndex(0);
  };
  const handleNext = () => {
    setCurrentIndex((preValue) => (preValue + 1) % data.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (preValue) => (preValue - 1 + data.length) % data.length
    );
  };

  return (
    <div className="topDiv">
      <div className="Card">
        <button className="button" onClick={handleReset}>
          Reset
        </button>
        <button className="button" onClick={handlePrev}>
          Prev
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
        <div className="Text">
          <h1>{data[currentIndex]?.title}</h1>
          <h1>{data[currentIndex]?.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default Slides;
