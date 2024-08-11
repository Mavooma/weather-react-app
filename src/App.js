import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Greece" />
      <footer>
        This project was coded by <a href="https://app.netlify.com/teams/mavooma/sites" target="_blank" rel="noreferrer">Vuyelwa Mavuma</a> and is open-sourced on {" "} <a href="https://github.com/Mavooma/weather-react-app" target="_blank" rel="noreferrer">GitHub</a>{" "}and <a href="https://weatherappreactmavooma.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}

