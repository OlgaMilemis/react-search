import React, {useSate} from "react";

export default function Temperature(props) {  
const [temp, setTemp] = useState("celsius");


  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  {if (temp === "celsius")
return (
    <div className="Temperature">
      <span className="temperature">{Math.round(props.data.temperature)}</span>
      <span className="unit"> <a onClick={celsius}>
          °C
        </a>
        <a className="imp" onClick={fahrenheit}>
          °F
        </a></span>
    </div>
  );
}

    return (
      <div>
        <span id="deg">{Math.round(props.temp)}°C</span>
        <a className="metric" onClick={celsius}>
          °C
        </a>
        <a className="imp" onClick={fahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((props.temp * 9) / 5 + 32);
    return (
      <div>
        <span id="deg">{fahrenheitTemp}°F</span>
        <button className="butC" onClick={celsius}>
          °C
        </button>
        <button className="butF" onClick={fahrenheit}>
          °F
        </button>
      </div>
    );
  }
}
