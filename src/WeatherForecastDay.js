// src/components/WeatherForecastDay.js
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  // Function to format maximum temperature
  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}°`;
  }

  // Function to format minimum temperature
  function minTemperature() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  // Function to get the day of the week
  function day() {
    const date = new Date(props.data.dt * 1000); // Convert Unix timestamp to Date object
    const dayIndex = date.getDay(); // Get the day of the week (0-6)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // Day names
    return days[dayIndex]; // Return the name of the day
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
