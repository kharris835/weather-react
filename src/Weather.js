import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

const apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
const units = "imperial";

export default function Weather({ city }) {
  const [input, setInput] = useState(city);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState("fahrenheit");
  const [errorMessage, setErrorMessage] = useState(null);

  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let locationAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
      axios.get(locationAPI).then(showCurrentWeather);
    });
  }

  function showCurrentWeather(response) {
    const forecastAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=current,minutely,alerts&appid=${apiKey}&units=${units}`;
    axios.get(forecastAPI).then(function showForecastData(forecastResponse) {
      setWeatherData({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        precipitation: Math.round(forecastResponse.data.daily[0].pop * 100),
        wind: Math.round(response.data.wind.speed),
        icon: response.data.weather[0].icon,
      });
      setForecastData(forecastResponse.data);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }
    currentWeather();
  }

  function currentWeather() {
    const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${units}`;
    axios
      .get(currentWeatherAPI)
      .then(showCurrentWeather)
      .catch(function () {
        setErrorMessage("Whoops! Double check your city is valid.");
        setTimeout(function () {
          setErrorMessage(errorMessage);
        }, 2500);
      });
  }

  function updateInput(event) {
    setInput(event.target.value.trim());
  }

  useEffect(() => {
    // Runs on initial render
    const currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(currentWeatherAPI).then(showCurrentWeather);
  }, [city]);

  if (!weatherData) {
    return null;
  }

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mt-2 mb-4">
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
                  onClick={getLocation}
                >
                  Current Location
                </button>
              </div>
              <div
                className="ms-1 mt-1 fst-italic text-danger"
                style={{ minHeight: 24 }}
              >
                {errorMessage}
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
          <Forecast data={forecastData} unit={unit} />
        </div>
      </div>
    </div>
  );
}
