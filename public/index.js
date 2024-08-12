function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector(".weather-app-details");
    let humidityElement = document.querySelector(".weather-app-details strong:nth-of-type(1)");
    let windSpeedElement = document.querySelector(".weather-app-details strong:nth-of-type(2)");
    let iconElement = document.querySelector(".weather-app-icon");
    let date = new Date(response.data.time * 1000);

    if (!temperatureElement || !cityElement || !descriptionElement || 
        !humidityElement || !windSpeedElement || !iconElement) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = `${formatDate(date)}, ${response.data.condition.description}<br /> Humidity: <strong>${response.data.temperature.humidity}%</strong>, Wind: <strong>${response.data.wind.speed} km/h</strong>`;
    temperatureElement.innerHTML = `${Math.round(response.data.temperature.current)}°C`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "3d62bcb4bbt00d0doafe81237a14077e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather).catch(error => {
        console.error("Error fetching weather data:", error);
    });
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    if (searchInput && searchInput.value) {
        searchCity(searchInput.value);
    } else {
        console.error("Search input is empty.");
    }
}

let searchFormElement = document.querySelector("#search-form");
if (searchFormElement) {
    searchFormElement.addEventListener("submit", handleSearchSubmit);
} else {
    console.error("Search form element not found.");
}

searchCity("Paris");
