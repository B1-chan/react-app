import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./Temperature.css";

export default function Temperature(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "https://suspicious-goldwasser-cb5f0f.netlify.app/images/01d.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      celsiusTemp: response.data.main.feels_like,
      fahrenheitTemp: (response.data.main.feels_like * 9) / 5 + 32,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="current">
            <ul>
              <li>Last updated:</li>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
            </ul>
            <img
              src={weatherData.iconUrl}
              id="icon"
              alt={weatherData.description}
              width="30%"
            />
            <p className="current-text">
              <span className="description" id="description">
                {weatherData.description}
              </span>
              <br />
              <span className="temperature" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <small>
                <span className="units">
                  <span>°C</span> | <span>°F</span>
                </span>
              </small>
              <br />
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="info">
            <ul>
              <li>
                Feels like:{" "}
                <span id="feels-like-celsius">
                  {Math.round(weatherData.celsiusTemp)}
                </span>
                °C |{" "}
                <span id="feels-like-fahrenheit">
                  {Math.round(weatherData.fahrenheitTemp)}
                </span>
                °F
              </li>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(weatherData.wind)}</span> km/h
              </li>
            </ul>
            <hr />
            <ul className="forecast-text">
              <li>Forecast</li>
            </ul>
            <div className="weather-forecast" id="forecast">
              <div class="row justify-content-center">
                <div className="col-3">
                  <img
                    src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/04d.png"
                    alt="cloudy"
                    width="50%"
                  />
                  <div className="forecast-temperatures">
                    <span className="forecast-temperature-max">6° </span>
                    <span className="forecast-temperature-min">0° </span>
                  </div>
                  <div className="forecast-date">Sun</div>
                </div>
                <div className="col-3">
                  <img
                    src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/13d.png"
                    alt="cloudy"
                    width="50%"
                  />
                  <div className="forecast-temperatures">
                    <span className="forecast-temperature-max">8° </span>
                    <span className="forecast-temperature-min">2° </span>
                  </div>
                  <div className="forecast-date">Mon</div>
                </div>
                <div className="col-3">
                  <img
                    src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/13d.png"
                    alt="cloudy"
                    width="50%"
                  />
                  <div className="forecast-temperatures">
                    <span className="forecast-temperature-max">10° </span>
                    <span className="forecast-temperature-min">2° </span>
                  </div>
                  <div className="forecast-date">Tue</div>
                </div>
                <div className="col-3">
                  <img
                    src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/01d.png"
                    alt="cloudy"
                    width="50%"
                  />
                  <div className="forecast-temperatures">
                    <span className="forecast-temperature-max">7° </span>
                    <span className="forecast-temperature-min">1° </span>
                  </div>
                  <div className="forecast-date">Wed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b17588c7696fb561b494319a7441ef17";
    let city = "Osaka";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
