import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              {" "}
              <img src={props.data.icon} alt={props.data.description} />
            </div>
            <div className="float-left">
              <Temperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Windspeed: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
