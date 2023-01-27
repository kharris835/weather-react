import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast text-center mt-4">
      <div className="row">
        <div className="col">
          <div className="day pb-2">Sat</div>
          <WeatherIcon code="01d" size={52} />
          <div className="pt-2">
            <span className="temperature-max">68º</span>
            <span className="temperature-min ms-2">52º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
