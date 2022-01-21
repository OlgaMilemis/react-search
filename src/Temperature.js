import React, { useState } from "react";
import "./Weather.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayMetric(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayImperial(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function getFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={displayImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span className="temperature">{Math.round(getFahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={displayMetric}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
