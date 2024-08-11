<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Weather application" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
    <title>React Weather App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <!-- Optional: Vanilla Weather App Content -->
    <div class="weather-app">
      <header>
        <form class="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            class="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div class="weather-app-data">
          <div>
            <h1 class="weather-app-city" id="city"></h1>
            <p class="weather-app-details">
              Tuesday 14:49, scattered clouds
              <br />
              Humidity: <strong>66%</strong>, Wind: <strong>3.13km/h</strong>
            </p>
          </div>
          <div class="weather-app-temperature-container">
            <div class="weather-app-icon">🌤️</div>
            <div class="weather-app-temperature" id="temperature"></div>
            <div class="weather-app-unit">18°C</div>
          </div>
        </div>
      </main>
      <footer>
        This project was coded by
        <a href="https://github.com/Mavooma" target="_blank">Vuyelwa Mavuma</a>,
        is
        <a href="https://github.com/Mavooma/weather-react-app" target="_blank">open-sourced on GitHub</a>
        and 
        <a href="https://weatherappreactmavooma.netlify.app/" target="_blank">hosted on Netlify</a>.
      </footer>
    </div>
    
    <script src="index.js"></script>
  </body>
</html>
