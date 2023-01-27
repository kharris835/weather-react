import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  const apiKey = "b5b56bf4012bed80cd4ce11f2dda7ff2";
  const units = "imperial";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;

  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,alerts&appid=${apiKey}&units=${units}`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="Forecast text-center mt-4">
      <div className="row">
        <div className="col">
          <div className="day pb-2">Sat</div>
          <WeatherIcon code="03d" size={42} />
          <div className="pt-1">
            <span className="temperature-max">68º</span>
            <span className="temperature-min ms-2">52º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
