import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row mt-2 mb-5">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="w-100 h-100"
                  autoFocus="on"
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
                <span className="current-temperature">45</span>
                <span className="units">ºF | ºC</span>
              </h2>
              <h1 className="current-city mb-0">Boulder</h1>
              <ul className="list-unstyled mb-0">
                <li>Friday 6:09 PM</li>
                <li>Sunny</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled">
                <li>
                  Humidity: <span className="secondary-color">57%</span>
                </li>
                <li>
                  Precipitation: <span className="secondary-color">0%</span>
                </li>
                <li>
                  Wind: <span className="secondary-color">1mph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
