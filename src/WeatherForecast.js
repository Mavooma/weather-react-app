import React, { useState, useEffect, useCallback } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) { 
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  const load = useCallback(() => {
    if (!props.coordinates) return;

    const apiKey = "17ad6e67aa629189f73b053634668b20";
    const { lon: longitude, lat: latitude } = props.coordinates;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
    if (props.coordinates) {
      load();
    }
  }, [props.coordinates, load]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.slice(0, 5).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
