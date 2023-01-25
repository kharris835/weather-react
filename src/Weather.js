import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function showCurrentWeather(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (input.length === 0) {
      return;
    }
    const apiKey = "b5b56bf4012bed80cd4ce11f2dda7ff2";
    const units = "imperial";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showCurrentWeather);
  }

  function updateInput(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mt-2 mb-5">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="w-100 h-100"
                  autoFocus={true}
                  onChange={updateInput}
                />
              </div>
              <div className="col-5 text-center">
                <button
                  type="submit"
                  value="Search"
                  className="btn btn-dark me-1 search-btn"
                >
                  Search
                </button>
                <button
                  type="submit"
                  value="Current Location"
                  className="btn location-btn"
                >
                  Current Location
                </button>
              </div>
            </div>
          </form>
          <div className="row align-items-center">
            <div className="col-4 align-self-center text-end">
              <img src="images/sun.svg" alt="Sunny" width="120px" />
            </div>
            <div className="col-4">
              <h2 className="mb-0">
                <span className="current-temperature">
                  {weatherData?.temperature || "58"}
                </span>
                <span className="units">ºF | ºC</span>
              </h2>
              <h1 className="current-city mb-0 text-capitalize">
                {weatherData?.city || "San Diego"}
              </h1>
              <ul className="list-unstyled mb-0">
                <li>
                  <FormattedDate date={weatherData?.date || new Date()} />
                </li>
                <li className="text-capitalize">
                  {weatherData?.description || "Sunny"}
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
      </div>
    </div>
  );
}
