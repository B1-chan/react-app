import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div class="row justify-content-between">
      <div className="current">
        <div className="col">
          <ul>
            <li>Last updated:</li>
            <li id="date">Sunday, Feb 20, 12:00</li>
          </ul>
          <img
            src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/01d.png"
            id="icon"
            alt="sun"
            width="20%"
          />
          <p className="current-text">
            <span className="description" id="description">
              Sunny
            </span>
            <br />
            <span className="temperature" id="temperature">
              5
            </span>{" "}
            <small>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </small>
            <br />
          </p>
        </div>
      </div>
      <div className="col">
        <div className="info">
          <ul className="current-info">
            <li>
              Feels like: <span id="feels-like-celsius">3</span>°C |{" "}
              <span id="feels-like-fahrenheit">37</span>°F
            </li>
            <li>
              Humidity: <span id="humidity">46</span>%
            </li>
            <li>
              Wind: <span id="wind">6</span> km/h
            </li>
          </ul>
          <hr />
          <ul className="forecast-text">
            <li>Forecast</li>
          </ul>
          <div className="weather-forecast" id="forecast">
            <div class="row justify-content-between">
              <div className="col-3">
                <img
                  src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/04d.png"
                  alt="cloudy"
                  width="10%"
                />
                <div className="forecast-temperatures">
                  <span className="forecast-temperature-max">8° </span>
                  <span className="forecast-temperature-min">2° </span>
                </div>
                <div className="forecast-date">Sun</div>
              </div>
              <div className="col-3">
                <img
                  src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/13d.png"
                  alt="cloudy"
                  width="10%"
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
                  width="10%"
                />
                <div className="forecast-temperatures">
                  <span className="forecast-temperature-max">8° </span>
                  <span className="forecast-temperature-min">2° </span>
                </div>
                <div className="forecast-date">Tue</div>
              </div>
              <div className="col-3">
                <img
                  src="https://suspicious-goldwasser-cb5f0f.netlify.app/images/01d.png"
                  alt="cloudy"
                  width="10%"
                />
                <div className="forecast-temperatures">
                  <span className="forecast-temperature-max">8° </span>
                  <span className="forecast-temperature-min">2° </span>
                </div>
                <div className="forecast-date">Wed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
