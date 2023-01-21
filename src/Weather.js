import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-7">
                <input type="search" placeholder="Enter a city..." />
              </div>
              <div className="col-5">
                <input type="submit" value="Search" />
                <input type="submit" value="Current Location" />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-4 align-self-center text-end">
              <img src="images/sun.svg" alt="Sunny" width="120px" />
            </div>
            <div className="col-4">
              <h2>45ºF</h2>
              <h1>Boulder</h1>
              <ul>
                <li>Friday 6:09 PM</li>
                <li>Sunny</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>Humidity: 57%</li>
                <li>Precipitation: 0%</li>
                <li>Wind: 1mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
