import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const buttons = [
    "+",
    "-",
    "*",
    "=",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "%",
    "1",
    "2",
    "3",
    "Clear",
  ];
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setInput(() => handleCalculate());
    }
    if (value === "Clear") {
      setInput(() => handleClear());
    }
    if (value === "Reset") {
      setInput(() => handleReset());
    }
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    return setInput(input.slice(0, -1));
  };

  useEffect(() => {
    const i = setTimeout(() => {
      if (input === "NAN") {
        setInput('');
      }
    }, 1000);
    return () => clearTimeout(i);
  }, [input]);

  const handleCalculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("NAN");
    }
  };

  const handleReset = () => {
    setInput("");
  };

  return (
    <div className="topDiv">
      <div className="App">
        <input className="Display" type="text" readOnly value={input} />
        <div className="ButtonTopDiv">
          {buttons.map((element, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(element)}
                className="button"
              >
                {element}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex" }}>
          <button onClick={() => handleClick("Reset")} className="ButtonBotDiv">
            Reset
          </button>
          <button onClick={() => handleClick("")} className="ButtonBotDiv">
            Trigonometry
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
