import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Forecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }
  let apiKey = "5eac19cf21f53d5d30820a9a9bafd9f0";
  let units = "metric";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `htpps://https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="Forecast">
      <div className="row mt-5">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <div className="icon">
            {" "}
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <div className="Forecast-temp">
            <span className="Forecast-tempMax">10°</span>
            <span className="Forecast-tempMin">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
