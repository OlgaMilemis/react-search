import React from "react";
import "./Weather.css";

export default function ForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function tempMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function tempMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastDay">
      <div>{day()}</div>
      <img src={icon} alt={props.data.description} />
      <div className="Forecast-temps">
        <span className="Forecast-tempMax">{tempMax()}</span>
        <span className="Forecast-tempMin">{tempMin()}</span>
      </div>
    </div>
  );
}
