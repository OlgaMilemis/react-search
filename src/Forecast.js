import React from "react";
import "./Weather.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row mt-5">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <div className="icon">
            {" "}
            <img
              src="http://openweathermap.org/img/wn/01n@2x.png"
              alt="broken clouds"
            />
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
