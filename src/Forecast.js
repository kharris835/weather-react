import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast({ data }) {
  console.log(data);
  const temperatureMax = Math.round(data.daily[0].temp.max);
  const temperatureMin = Math.round(data.daily[0].temp.min);

  return (
    <div className="Forecast text-center mt-4">
      <div className="row">
        <div className="col">
          <div className="day pb-2">{data.daily[0].dt}</div>
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
