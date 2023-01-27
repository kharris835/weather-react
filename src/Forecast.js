import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast({ data }) {
  console.log(data);
  const temperatureMax = Math.round(data.daily[0].temp.max);
  const temperatureMin = Math.round(data.daily[0].temp.min);

  function day() {
    let date = new Date(data.daily[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Forecast text-center mt-4">
      <div className="row">
        <div className="col">
          <div className="day pb-2">{day()}</div>
          <WeatherIcon code={data.daily[0].weather[0].icon} size={42} />
          <div className="pt-1">
            <span className="temperature-max">{temperatureMax}º</span>
            <span className="temperature-min ms-2">{temperatureMin}º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
