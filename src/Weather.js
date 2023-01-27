import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

const apiKey = "b5b56bf4012bed80cd4ce11f2dda7ff2";
const units = "imperial";

export default function Weather({ city }) {
  const [input, setInput] = useState(city);
  const [weatherData, setWeatherData] = useState(null);

  function showCurrentWeather(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      // precipitation: Math.round(forecastResponse.data.daily[0].pop * 100),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (input.length === 0) {
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showCurrentWeather);
  }

  function updateInput(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    // Runs on initial render
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showCurrentWeather);
  }, [city]);

  if (!weatherData) {
    return null;
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
                  value={input}
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
          <WeatherInfo data={weatherData} />
          <Forecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    </div>
  );
}
