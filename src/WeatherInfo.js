import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";
import "./WeatherInfo.css";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <div className="row align-items-center">
        <div className="col-4 align-self-center text-end">
          <WeatherIcon code={data.icon} size={120} alt={data.description} />
        </div>
        <div className="col-4">
          <h2 className="mb-0">
            <TemperatureConversion fahrenheit={data.temperature} />
          </h2>
          <h1 className="current-city mb-0 text-capitalize">{data.city}</h1>
          <ul className="list-unstyled mb-0">
            <li>
              <FormattedDate date={data.date} />
            </li>
            <li className="text-capitalize">{data.description}</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="list-unstyled">
            <li>
              Humidity:{" "}
              <span className="secondary-color">{data.humidity}%</span>
            </li>
            <li>
              Precipitation:{" "}
              <span className="secondary-color">
                {/* pull precipitation data from API */}
                {data.precipitation}%
              </span>
            </li>
            <li>
              Wind: <span className="secondary-color">{data.wind}mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
