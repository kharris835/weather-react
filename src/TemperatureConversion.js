import React, { useState } from "react";
import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celcius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="TemperatureConversion">
        <span className="current-temperature">{props.fahrenheit}</span>
        <span className="units p-1">
          ºF |{" "}
          <a href="/" onClick={showCelcius} className="text-decoration-none">
            ºC
          </a>{" "}
        </span>
      </div>
    );
  }
  return (
    <div className="TemperatureConversion">
      <span className="current-temperature">{Math.round(celcius())}</span>
      <span className="units">
        <a href="/" onClick={showFahrenheit} className="text-decoration-none">
          ºF{" "}
        </a>
        | ºC
      </span>
    </div>
  );
}
