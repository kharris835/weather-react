import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Boulder",
    date: "Saturday 5:38pm",
    description: "Clear Sky",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/weather/day-sunny-icon.png",
    temperature: 58,
    humidity: 26,
    precipitation: 22,
    wind: 3,
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-7">
                <input
                  type="text"
                  placeholder="Search for a city..."
                  className="w-100 form-control"
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>
              <div className="col-5">
                <button type="submit" className="btn btn-dark mr-1">
                  Search
                </button>
                <button type="submit" className="btn location-btn">
                  Current Location
                </button>
              </div>
            </div>
          </form>

          <div
            className="error-field text-danger mt-2 ml-1 font-italic p-0"
            style={{ minHeight: 24 }}
          ></div>

          <div className="current-weather">
            <div className="row mt-4 align-items-center">
              <div className="col-4 main-weather-icon">
                <img
                  src={weatherData.image}
                  alt={weatherData.description}
                  width="120px"
                />
              </div>
              <div className="col-4">
                <h1 className="mb-0">
                  <span className="main-temperature">
                    {weatherData.temperature}
                  </span>
                  <span className="units">
                    <a href="/" className="active">
                      ºF
                    </a>{" "}
                    |<a href="/"> ºC</a>
                  </span>
                </h1>
                <h2 className="city mb-0">{weatherData.city}</h2>
                <div className="format-date">{weatherData.date}</div>
                <div>{weatherData.description}</div>
              </div>
              <div className="col-4">
                <div></div>
                <ul>
                  <li>
                    <span>Humidity: {weatherData.humidity}%</span>
                    <span className="color"></span>
                  </li>
                  <li>
                    <span>Precipitation: {weatherData.precipitation}%</span>
                    <span className="color"></span>
                  </li>
                  <li>
                    <span>Wind: {weatherData.wind}mph</span>
                    <span className="color"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer p-1">
        <a
          href="https://github.com/kharris835/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Kelsie Harris (written in React w/ ☕️)
      </div>
    </div>
  );
}
