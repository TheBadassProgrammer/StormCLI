document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("cityInput");
    const weatherOutput = document.getElementById("weatherOutput");

    cityInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const city = cityInput.value.trim();
            if (city !== "") {
                getCoordinates(city);
            }
        }
    });

    async function getCoordinates(city) {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&format=json`;

        try {
            const response = await fetch(geoUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const { latitude, longitude, name, country } = data.results[0];
                getWeather(latitude, longitude, name, country);
            } else {
                weatherOutput.innerHTML = `<p class="terminal-prompt">$ Error: City not found.</p>`;
            }
        } catch (error) {
            weatherOutput.innerHTML = `<p class="terminal-prompt">$ Error: Unable to fetch city data.</p>`;
        }
    }

    async function getWeather(lat, lon, city, country) {
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

        try {
            const response = await fetch(weatherUrl);
            const data = await response.json();

            if (data.current_weather) {
                weatherOutput.innerHTML = `
                    <p class="terminal-prompt">$ Weather in ${city}, ${country}:</p>
                    <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
                    <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
                    <p>☁️ Condition: ${getWeatherCondition(data.current_weather.weathercode)}</p>
                `;
            } else {
                weatherOutput.innerHTML = `<p class="terminal-prompt">$ Error: Weather data unavailable.</p>`;
            }
        } catch (error) {
            weatherOutput.innerHTML = `<p class="terminal-prompt">$ Error: Unable to fetch weather.</p>`;
        }
    }

    function getWeatherCondition(code) {
        const conditions = {
            0: "Clear Sky",
            1: "Mainly Clear",
            2: "Partly Cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Rime Fog",
            51: "Light Drizzle",
            53: "Moderate Drizzle",
            55: "Dense Drizzle",
            61: "Light Rain",
            63: "Moderate Rain",
            65: "Heavy Rain",
            71: "Light Snow",
            73: "Moderate Snow",
            75: "Heavy Snow",
            80: "Light Showers",
            81: "Moderate Showers",
            82: "Heavy Showers",
            95: "Thunderstorm",
            96: "Thunderstorm with Hail",
            99: "Severe Thunderstorm with Hail"
        };
        return conditions[code] || "Unknown Weather";
    }
});
// ========== YOUTUBE BACKGROUND SOUND ==========
document.addEventListener("DOMContentLoaded", function () {
    let stormVideoId = "cIto6qzW0Mc"; // YouTube video ID for storm sounds
    let iframe = document.createElement("iframe");
    
    iframe.style.display = "none"; // Hide the iframe
    iframe.src = `https://www.youtube.com/embed/${stormVideoId}?autoplay=1&loop=1&playlist=${stormVideoId}`;
    iframe.allow = "autoplay";
    document.body.appendChild(iframe);
});

// User interaction required
document.addEventListener("click", function () {
    let stormVideoId = "cIto6qzW0Mc";
    let iframe = document.createElement("iframe");

    iframe.style.display = "none";
    iframe.src = `https://www.youtube.com/embed/${stormVideoId}?autoplay=1&loop=1&playlist=${stormVideoId}`;
    iframe.allow = "autoplay";
    document.body.appendChild(iframe);
}, { once: true }); // Ensures it runs only once

// ======= MATRIX RAIN EFFECT =======
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = new Array(columns).fill(1);
const chars = "0123456789ABCDEF!@#$%^&*()_+-=";


function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = "16px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }

    // Storm flash effect
    if (Math.random() > 0.98) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

setInterval(drawMatrix, 50);
