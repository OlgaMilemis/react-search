import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </form>
      <h1>Berlin</h1>
      <ul>
        <li>Tuesday 11:35</li>
        <li>Partly Sunny</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <img
            src="
          https://www.accuweather.com/images/weathericons/03.svg"
            alt="patly sunny"
          />
          <span className="temperature">3</span>
          <span className="unit">° C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 30%</li>
            <li>Windspeed: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
