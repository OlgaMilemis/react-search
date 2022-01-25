import React from "react";

export default function ForecastDay(props) {
  function day() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

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
    <div>
      <div className="ForecastDay">{day()}</div>
      <img src={props.data.icon} alt={props.data.description} />
      <div className="Forecast-temps">
        <span className="Forecast-tempMax">{tempMax()}</span>
        <span className="Forecast-tempMin">{tempMin()}</span>
      </div>
    </div>
  );
}
