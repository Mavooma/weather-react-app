function refreshWeather(response) {
    const temperatureElement = document.querySelector("#temperature");
    const cityElement = document.querySelector("#city");
    const descriptionElement = document.querySelector(".weather-app-details");
    const humidityElement = document.querySelector(".weather-app-details strong:nth-of-type(1)");
    const windSpeedElement = document.querySelector(".weather-app-details strong:nth-of-type(2)");
    const iconElement = document.querySelector(".weather-app-icon");

    // Check if the necessary elements exist
    if (!temperatureElement || !cityElement || !descriptionElement || 
        !humidityElement || !windSpeedElement || !iconElement) {
        console.error("One or more elements are missing in the DOM.");
        return;
    }

    const date = new Date(response.data.time * 1000);

    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = `${formatDate(date)}, ${response.data.condition.description}<br /> Humidity: <strong>${response.data.temperature.humidity}%</strong>, Wind: <strong>${response.data.wind.speed} km/h</strong>`;
    temperatureElement.innerHTML = `${Math.round(response.data.temperature.current)}°C`;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    const apiKey = "3d62bcb4bbt00d0doafe81237a14077e"; // Consider moving this to an environment variable
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    
    axios.get(apiUrl)
        .then(refreshWeather)
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function handleSearchSubmit(event) {
    event.preventDefault();
    const searchInput = document.querySelector("#search-form-input");

    if (searchInput && searchInput.value.trim() !== "") {
        searchCity(searchInput.value.trim());
    } else {
        console.error("Search input is empty.");
    }
}

// Initialize event listener if search form element exists
const searchFormElement = document.querySelector("#search-form");
if (searchFormElement) {
    searchFormElement.addEventListener("submit", handleSearchSubmit);
} else {
    console.error("Search form element not found.");
}

// Initial city search
searchCity("Paris");
