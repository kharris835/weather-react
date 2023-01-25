import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row align-items-center">
        <div className="col-4 align-self-center text-end">
          <img src="images/sun.svg" alt="Sunny" width="120px" />
        </div>
        <div className="col-4">
          <h2 className="mb-0">
            <span className="current-temperature">
              {props.data?.temperature || "58"}
            </span>
            <span className="units">ºF | ºC</span>
          </h2>
          <h1 className="current-city mb-0 text-capitalize">
            {props.data?.city || "San Diego"}
          </h1>
          <ul className="list-unstyled mb-0">
            <li>
              {/* <FormattedDate date={props.data?.date || new Date()} /> */}
              <FormattedDate date={props.data?.date || new Date()} />
            </li>
            <li className="text-capitalize">
              {props.data?.description || "Sunny"}
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="list-unstyled">
            <li>
              Humidity: <span className="secondary-color">82%</span>
            </li>
            <li>
              Precipitation: <span className="secondary-color">1%</span>
            </li>
            <li>
              Wind: <span className="secondary-color">5mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
