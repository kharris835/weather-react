import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast({ data }) {
  console.log(data);
  function temperatureMax(dailyForecast) {
    const temperatureMax = Math.round(dailyForecast.temp.max);
    return temperatureMax;
  }
  function temperatureMin(dailyForecast) {
    const temperatureMin = Math.round(dailyForecast.temp.min);
    return temperatureMin;
  }

  function day(dailyForecast) {
    let date = new Date(dailyForecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Forecast text-center mt-4">
      <div className="row">
        {data.daily.slice(0, 6).map(function (dailyForecast) {
          return (
            <div className="col">
              <div className="day pb-2">{day(dailyForecast)}</div>
              <WeatherIcon code={dailyForecast.weather[0].icon} size={42} />
              <div className="pt-1">
                <span className="temperature-max">
                  {temperatureMax(dailyForecast)}º
                </span>
                <span className="temperature-min ms-2">
                  {temperatureMin(dailyForecast)}º
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
